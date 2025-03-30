import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useQuiz } from "../../context/QuizContext";
import api from "../../src/api/client";
import ChatBot, { ChatBotHandle } from "../../src/components/Chatbot";

interface Lesson {
  id: number;
  title: string;
  questions: {
    id: number;
    text: string;
    choices: {
      id: number;
      text: string;
      isCorrect: boolean;
    }[];
  }[];
}

const QuizComponent = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { addAnswer, resetQuiz } = useQuiz();
  const [lesson, setLesson] = React.useState<Lesson | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = React.useState<number | null>(
    null
  );
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);
  const [buttonState, setButtonState] = React.useState<
    "continue" | "next" | "finish"
  >("continue");
  const [isReset, setIsReset] = React.useState(false);

  const chatBotRef = React.useRef<ChatBotHandle>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [result, setResult] = React.useState<{
    isCorrect: boolean;
    feedback: string;
  } | null>(null);

  const handleHelpPress = () => {
    chatBotRef.current?.toggleChat();
  };

  React.useEffect(() => {
    if (!isReset) {
      resetQuiz();
      setIsReset(true);
    }

    resetQuiz(); // Reset quiz state when component mounts
    const fetchLesson = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/lessons/${params.id}`);
        // console.log("Lesson data:", response.data.lesson.questions.length);
        if (response.data?.lesson?.questions?.length <= 0) {
          throw new Error("Lesson has no questions");
        }

        setLesson(response.data?.lesson);
      } catch (err) {
        console.error("Failed to fetch lesson:", err);
        setError(err.message || "Failed to load lesson");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, []);

  const handleChoiceSelect = (choiceId: number) => {
    if (!showCorrectAnswer && lesson?.questions?.[currentQuestionIndex]) {
      setSelectedChoice(choiceId);
    }
  };

  const handleButtonPress = async () => {
    if (!lesson || !lesson.questions) return;

    // If we're showing the correct answer (after first button press)
    if (showCorrectAnswer) {
      if (currentQuestionIndex < lesson.questions.length - 1) {
        // Move to next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedChoice(null);
        setShowCorrectAnswer(false);
        setButtonState("continue");
      } else {
        // Quiz is finished
        router.push("/quiz/review");
      }
      return;
    }

    // Original logic for submitting answer (first button press)
    if (selectedChoice === null) return;

    try {
      const currentQuestion = lesson.questions[currentQuestionIndex];
      const selectedChoiceObj = currentQuestion.choices.find(
        (choice) => choice.id === selectedChoice
      );

      if (!selectedChoiceObj) return;

      setModalVisible(true);

      // Submit answer to backend
      const response = await api.post(`/lessons/check-answer`, {
        questionId: currentQuestion.id,
        choiceId: selectedChoice,
      });

      const correctChoice = currentQuestion.choices.find(
        (choice) => choice.isCorrect
      );

      const answer = {
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        selectedChoiceId: selectedChoice,
        selectedChoiceText: selectedChoiceObj.text,
        isCorrect: selectedChoiceObj.isCorrect,
        correctChoiceId: correctChoice?.id || 0,
        correctChoiceText: correctChoice?.text || "",
      };

      addAnswer(answer);
      setShowCorrectAnswer(true);

      setResult({
        isCorrect: selectedChoiceObj.isCorrect,
        feedback:
          response.data?.feedback ||
          (selectedChoiceObj.isCorrect
            ? "Correct answer!"
            : "Incorrect, try again!"),
      });

      // Determine next button state
      if (currentQuestionIndex < lesson.questions.length - 1) {
        setButtonState("next");
      } else {
        setButtonState("finish");
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || "An error occurred");
      setResult({
        isCorrect: false,
        feedback: "Error submitting answer. Please try again.",
      });
    } finally {
      setModalVisible(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#6337a1" />
        <Text style={styles.loadingText}>Loading lesson...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => window.location.reload()}
        >
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!lesson || lesson.questions?.length <= 0) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>
          No questions available for this lesson
        </Text>
      </View>
    );
  }

  if (currentQuestionIndex >= lesson.questions.length) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.completionText}>Lesson Completed!</Text>
      </View>
    );
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageNumber}>
          {currentQuestionIndex + 1}/{lesson.questions.length}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>

        {currentQuestion.choices.map((choice, index) => {
          const isSelected = selectedChoice === choice.id;
          const isCorrect = choice.isCorrect;
          const showAsCorrect = showCorrectAnswer && isCorrect;
          const showAsIncorrect = showCorrectAnswer && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              key={choice.id}
              style={[
                styles.optionBox,
                showAsCorrect && styles.correctChoice,
                showAsIncorrect && styles.incorrectChoice,
                isSelected && !showCorrectAnswer && styles.selectedChoice,
              ]}
              onPress={() => handleChoiceSelect(choice.id)}
              disabled={showCorrectAnswer}
            >
              <Text
                style={[
                  styles.optionText,
                  showAsCorrect && styles.correctChoiceText,
                  showAsIncorrect && styles.incorrectChoiceText,
                ]}
              >
                {String.fromCharCode(65 + index)}. {choice.text}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedChoice &&
              buttonState === "continue" &&
              styles.disabledButton,
          ]}
          onPress={handleButtonPress}
          disabled={!selectedChoice && buttonState === "continue"}
        >
          <Text style={styles.continueText}>
            {buttonState === "continue"
              ? "Continue"
              : buttonState === "next"
              ? "Next Question"
              : "Finish"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Help Button in bottom right corner */}
      <TouchableOpacity onPress={handleHelpPress} style={styles.helpButton}>
        <Image
          style={styles.robotImage}
          source={require("../../src/img/robot.png")}
        />
        <Text style={styles.helpText}>Need help?</Text>
      </TouchableOpacity>

      <ChatBot ref={chatBotRef} taskId={currentQuestion.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfcff",
  },
  header: {
    height: 100,
    backgroundColor: "#6337a1",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  pageNumber: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  questionText: {
    fontSize: 22,
    color: "#fff",
    backgroundColor: "#6337a1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
  },
  optionBox: {
    borderWidth: 1,
    borderColor: "#d6bdf4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 18,
    color: "#000",
  },
  continueButton: {
    backgroundColor: "#ffd980",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  continueText: {
    fontSize: 18,
    color: "#000",
    fontFamily: "DoHyeon-Regular",
  },
  helpButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0e6ff",
    padding: 10,
    borderRadius: 20,
    zIndex: 0,
  },
  robotImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  helpText: {
    color: "#6337a1",
    fontSize: 14,
  },
  // Keep all your existing answer state styles
  correctChoice: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },
  correctChoiceText: {
    color: "#28a745",
    fontWeight: "bold",
  },
  incorrectChoice: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },
  incorrectChoiceText: {
    color: "#dc3545",
  },
  selectedChoice: {
    backgroundColor: "#e2e3e5",
    borderColor: "#d6d8db",
  },
  disabledButton: {
    opacity: 0.5,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfcff",
  },
  errorText: {
    fontSize: 18,
    color: "#ff3b30",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  completionText: {
    fontSize: 24,
    color: "#6337a1",
    fontWeight: "bold",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#6337a1",
  },
});
export default QuizComponent;

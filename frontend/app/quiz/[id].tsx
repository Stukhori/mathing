import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useQuiz } from "../../context/QuizContext";
import api from "../../src/api/client";

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

      // Submit answer to backend
      await api.post(`/lessons/check-answer`, {
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

      // Determine next button state
      if (currentQuestionIndex < lesson.questions.length - 1) {
        setButtonState("next");
      } else {
        setButtonState("finish");
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || "An error occurred");
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
      <View style={styles.background}>
        <View style={styles.header} />
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
            <React.Fragment key={choice.id}>
              <TouchableOpacity
                style={[
                  styles.optionBox,
                  styles[`optionBox${index}`],
                  showAsCorrect && styles.correctChoice,
                  showAsIncorrect && styles.incorrectChoice,
                  isSelected && !showCorrectAnswer && styles.selectedChoice,
                ]}
                onPress={() => handleChoiceSelect(choice.id)}
                disabled={showCorrectAnswer}
              />
              <Text
                style={[
                  styles.optionText,
                  styles[`optionText${index}`],
                  showAsCorrect && styles.correctChoiceText,
                  showAsIncorrect && styles.incorrectChoiceText,
                ]}
              >
                {String.fromCharCode(65 + index)}. {choice.text}
              </Text>
            </React.Fragment>
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
    </View>
  );
};

const styles = StyleSheet.create({
  completionText: {
    fontSize: 24,
    color: "#6337a1",
    fontWeight: "bold",
  },
  // New styles for answer states
  correctChoice: {
    backgroundColor: "#d4edda", // Light green
    borderColor: "#28a745", // Green
  },
  correctChoiceText: {
    color: "#28a745", // Green
    fontWeight: "bold",
  },
  incorrectChoice: {
    backgroundColor: "#f8d7da", // Light red
    borderColor: "#dc3545", // Red
  },
  incorrectChoiceText: {
    color: "#dc3545", // Red
  },
  selectedChoice: {
    backgroundColor: "#e2e3e5", // Light gray
    borderColor: "#d6d8db", // Gray
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

  // Error text style
  errorText: {
    fontSize: 18,
    color: "#ff3b30", // iOS-like red error color
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 24,
  },

  // Question text style
  questionText: {
    position: "absolute",
    top: "10%",
    left: "10%",
    right: "10%",
    textAlign: "center",
    fontSize: 22,
    color: "#000",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 28,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fdfcff",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: "absolute",
    top: -21,
    left: 0,
    backgroundColor: "#6337a1",
    width: 390,
    height: 350,
  },
  pageNumber: {
    position: "absolute",
    top: 33,
    right: 76,
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
  content: {
    flex: 1,
  },
  rectangleIcon: {
    position: "absolute",
    height: "20.62%",
    width: "85.64%",
    top: "11.49%",
    right: "7.18%",
    left: "0.18%",
    borderRadius: 10,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  optionBox: {
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
    left: "11.28%",
    right: "11.28%",
    width: "77.44%",
    height: "5.69%",
    borderRadius: 15,
  },
  optionBox0: { top: "42.3%", borderColor: "#d6bdf4" },
  optionBox1: { top: "50.95%", borderColor: "#d1b1ff" },
  optionBox2: { top: "59.83%", borderColor: "#d6bdf4" },
  optionBox3: { top: "68.6%", borderColor: "#d6bdf4" },
  optionText: {
    position: "absolute",
    left: "15.38%",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    fontSize: 22,
    fontWeight: "400",
  },
  optionText0: { top: "42.89%", fontFamily: "Roboto-Bold" },
  optionText1: { top: "51.54%", fontFamily: "DoHyeon-Regular" },
  optionText2: { top: "60.31%", fontFamily: "DoHyeon-Regular" },
  optionText3: { top: "69.08%", fontFamily: "Roboto-Bold" },
  ellipseIcon: {
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "7.95%",
    height: "3.67%",
    right: "15.13%",
    left: "76.92%",
  },
  continueButton: {
    position: "absolute",
    top: 678,
    left: 99,
    backgroundColor: "#ffd980",
    width: 193,
    height: 41,
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: { width: 0, height: 133 },
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
  },
  continueText: {
    position: "absolute",
    top: 2,
    left: 61,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
  // continueButton: {
  //   position: "absolute",
  //   top: 678,
  //   left: 99,
  //   backgroundColor: "#ffd980",
  //   width: 193,
  //   height: 41,
  //   borderRadius: 15,
  //   shadowColor: "rgba(0, 0, 0, 0)",
  //   shadowOffset: { width: 0, height: 133 },
  //   shadowRadius: 37,
  //   elevation: 37,
  //   shadowOpacity: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // continueText: {
  //   fontSize: 20,
  //   color: "#000",
  //   textAlign: "center",
  //   fontFamily: "DoHyeon-Regular",
  // },
});

export default QuizComponent;

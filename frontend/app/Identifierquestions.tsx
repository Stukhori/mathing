import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

const Component = ({ route }) => {
  const [lesson, setLesson] = React.useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedChoice, setSelectedChoice] = React.useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);
  const [buttonState, setButtonState] = React.useState("continue"); // "continue", "next", "finish"

  React.useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/lessons/0`);
        setLesson(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // fetchLesson();
    setLoading(false);
    setLesson({
      id: 1,
      title: "Basic Math Quiz",
      description: "Test your fundamental math skills",
      createdAt: "2023-11-15T08:00:00.000Z",
      updatedAt: "2023-11-15T08:00:00.000Z",
      questions: [
        {
          id: 1,
          text: "What is 2 + 2?",
          lessonId: 1,
          createdAt: "2023-11-15T08:00:00.000Z",
          updatedAt: "2023-11-15T08:00:00.000Z",
          choices: [
            {
              id: 1,
              text: "3",
              isCorrect: false,
              questionId: 1,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 2,
              text: "4",
              isCorrect: true,
              questionId: 1,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 3,
              text: "5",
              isCorrect: false,
              questionId: 1,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 4,
              text: "6",
              isCorrect: false,
              questionId: 1,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
          ],
        },
        {
          id: 2,
          text: "What is 5 × 3?",
          lessonId: 1,
          createdAt: "2023-11-15T08:00:00.000Z",
          updatedAt: "2023-11-15T08:00:00.000Z",
          choices: [
            {
              id: 5,
              text: "10",
              isCorrect: false,
              questionId: 2,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 6,
              text: "15",
              isCorrect: true,
              questionId: 2,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 7,
              text: "20",
              isCorrect: false,
              questionId: 2,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 8,
              text: "25",
              isCorrect: false,
              questionId: 2,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
          ],
        },
        {
          id: 3,
          text: "What is 10 ÷ 2?",
          lessonId: 1,
          createdAt: "2023-11-15T08:00:00.000Z",
          updatedAt: "2023-11-15T08:00:00.000Z",
          choices: [
            {
              id: 9,
              text: "2",
              isCorrect: false,
              questionId: 3,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 10,
              text: "5",
              isCorrect: true,
              questionId: 3,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 11,
              text: "8",
              isCorrect: false,
              questionId: 3,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
            {
              id: 12,
              text: "10",
              isCorrect: false,
              questionId: 3,
              createdAt: "2023-11-15T08:00:00.000Z",
              updatedAt: "2023-11-15T08:00:00.000Z",
            },
          ],
        },
      ],
    });
  }, []);

  const handleChoiceSelect = (choiceId) => {
    if (!showCorrectAnswer) {
      setSelectedChoice(choiceId);
    }
  };

  const handleButtonPress = () => {
    if (buttonState === "continue") {
      // First press - show correct answer and change button text
      setShowCorrectAnswer(true);
      setButtonState(
        currentQuestionIndex < lesson.questions.length - 1 ? "next" : "finish"
      );
    } else if (buttonState === "next") {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setShowCorrectAnswer(false);
      setButtonState("continue");
    } else {
      // Handle lesson completion
      console.log("Lesson completed!");
      // You might want to navigate away or show a completion screen here
      return; // Exit early to prevent further execution
    }
  };
  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#6337a1" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!lesson) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>No lesson data found</Text>
      </View>
    );
  }

  if (!lesson || currentQuestionIndex >= lesson.questions.length) {
    // Handle completion state - you might want to show a completion screen instead
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.completionText}>Lesson Completed!</Text>
      </View>
    );
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const correctChoice = currentQuestion.choices.find(
    (choice) => choice.isCorrect
  );

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
          style={styles.continueButton}
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
    justifyContent: "center",
    alignItems: "center",
  },
  continueText: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
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
});

export default Component;

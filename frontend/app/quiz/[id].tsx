import { View, Text, TouchableOpacity } from "react-native";
import { useQuiz } from "../../context/QuizContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

// Mock questions data - replace with your actual data source
const QUESTIONS = {
  "1": [
    {
      id: "1",
      text: "What is 2 + 2?",
      choices: [
        { id: "1", text: "3", isCorrect: false },
        { id: "2", text: "4", isCorrect: true },
      ],
    },
    {
      id: "2",
      text: "What is 5 × 3?",
      choices: [
        { id: "3", text: "10", isCorrect: false },
        { id: "4", text: "15", isCorrect: true },
      ],
    },
  ],
};

export default function QuizScreen() {
  const { id } = useLocalSearchParams();
  const { addAnswer, score } = useQuiz();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = QUESTIONS[id as string] || [];
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (choice: any) => {
    // Ensure we have the current question data
    if (!currentQuestion) return;
  
    // Debug the choice being passed
    console.log('Selected choice:', choice);
  
    // Find the correct answer for this question
    const correctChoice = currentQuestion.choices.find(c => c.isCorrect);
    console.log('Correct choice:', correctChoice);
  
    // Construct the FULL answer object
    const answer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      selectedChoiceId: choice.id,
      selectedChoiceText: choice.text,
      isCorrect: choice.isCorrect,
      correctChoiceId: correctChoice?.id,
      correctChoiceText: correctChoice?.text
    };
  
    console.log('Complete answer object:', answer);
    addAnswer(answer); // Pass the full object
  
    // Move to next question or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push({
        pathname: '/quiz/review',
        params: {
          totalQuestions: questions.length,
          lessonTitle: 'Basic Math Quiz'
        }
      });
    }
  };

  if (!currentQuestion) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No questions found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Question {currentIndex + 1}/{questions.length}
      </Text>

      <Text style={{ fontSize: 24, marginBottom: 30 }}>
        {currentQuestion.text}
      </Text>

      {currentQuestion.choices.map((choice) => (
        <TouchableOpacity
          key={choice.id}
          onPress={() => handleAnswer(choice)}
          style={{
            padding: 15,
            marginVertical: 5,
            backgroundColor: "#ddd",
            borderRadius: 5,
          }}
        >
          <Text>{choice.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

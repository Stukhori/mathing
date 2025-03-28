import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Answer = {
  questionId: string;
  questionText: string;
  selectedChoiceId: string;
  selectedChoiceText: string;
  isCorrect: boolean;
  correctChoiceId?: string;
  correctChoiceText?: string;
};

type QuizContextType = {
  answers: Answer[];
  score: number;
  addAnswer: (answer: Answer) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextType>({
  answers: [],
  score: 0,
  addAnswer: () => {},
  resetQuiz: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<{
    answers: Answer[];
    score: number;
  }>({
    answers: [],
    score: 0,
  });

  // Load saved progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      const saved = await AsyncStorage.getItem("currentQuiz");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers && typeof parsed.score === 'number') {
          setState(parsed);
          console.log('Loaded saved progress:', parsed);
        }
      }
    };
    loadProgress();
  }, []);

  const addAnswer = (answer: Answer) => {
    // Validation
    if (typeof answer !== "object" || !("isCorrect" in answer)) {
      console.error("Invalid answer format:", answer);
      return;
    }

    setState((prev) => {
      const newState = {
        answers: [...prev.answers, answer],
        score: answer.isCorrect ? prev.score + 1 : prev.score,
      };

      console.log("Updating state:", {
        oldScore: prev.score,
        newScore: newState.score,
        answerCorrectness: answer.isCorrect,
        totalAnswers: newState.answers.length
      });

      AsyncStorage.setItem("currentQuiz", JSON.stringify(newState));
      return newState;
    });
  };

  const resetQuiz = () => {
    setState({
      answers: [],
      score: 0,
    });
    AsyncStorage.removeItem("currentQuiz");
  };

  return (
    <QuizContext.Provider value={{
      answers: state.answers,
      score: state.score,
      addAnswer,
      resetQuiz
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
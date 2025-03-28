import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuiz } from '../context/QuizContext';
import { useEffect } from 'react';

export default function ReviewScreen() {
  const router = useRouter();
  const { answers, score, resetQuiz } = useQuiz();
  const { totalQuestions, lessonTitle } = useLocalSearchParams();

  const percentage = Math.round((score / Number(totalQuestions)) * 100);

  const handleRestart = () => {
    // resetQuiz();
    router.back(); // Or navigate to a specific quiz
  };

  useEffect(() => {
    console.log('Review screen loaded with:', {
      answers,
      score,
      totalQuestions,
      calculatedScore: answers.filter(a => a.isCorrect).length
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Quiz Complete!</Text>
        <Text style={styles.subtitle}>{lessonTitle}</Text>

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{score}/{totalQuestions}</Text>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>

        <View style={styles.resultsContainer}>
          {answers.map((answer, index) => (
            <View key={index} style={styles.answerItem}>
              <Text style={styles.questionText}>
                Q{index + 1}: {answer.questionText}
              </Text>
              <Text style={[
                styles.answerText,
                answer.isCorrect ? styles.correctAnswer : styles.incorrectAnswer
              ]}>
                Your answer: {answer.selectedChoiceText}
              </Text>
              {!answer.isCorrect && (
                <Text style={styles.correctAnswer}>
                  Correct answer: {answer.correctChoiceText}
                </Text>
              )}
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.restartButton}
          onPress={handleRestart}
        >
          <Text style={styles.restartButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfcff',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: 'absolute',
    top: -21,
    left: 0,
    backgroundColor: '#6337a1',
    width: 390,
    height: 200, // Smaller header for review screen
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    color: '#6337a1',
    fontFamily: 'DoHyeon-Regular',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Roboto-Bold',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 40,
    color: '#6337a1',
    fontFamily: 'DoHyeon-Regular',
  },
  percentageText: {
    fontSize: 24,
    color: '#ffd980',
    fontFamily: 'Roboto-Bold',
  },
  resultsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  answerItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Roboto-Bold',
  },
  answerText: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: 'DoHyeon-Regular',
  },
  correctAnswer: {
    color: '#28a745',
  },
  incorrectAnswer: {
    color: '#dc3545',
  },
  restartButton: {
    backgroundColor: '#ffd980',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  restartButtonText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'DoHyeon-Regular',
  },
});
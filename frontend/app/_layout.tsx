// app/_layout.tsx
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { QuizProvider } from '../context/QuizContext';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'DoHyeon-Regular': require('../assets/fonts/DoHyeon-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </QuizProvider>
  );
}
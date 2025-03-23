// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="Signup" options={{}} />
      <Stack.Screen name="Signin" options={{}} />
    </Stack>
  );
}

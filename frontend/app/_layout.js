// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="Signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="Signin" options={{ title: "Sign In" }} />
    </Stack>
  );
}

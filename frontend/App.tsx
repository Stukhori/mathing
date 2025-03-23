// App.tsx
import { registerRootComponent } from 'expo';
import { ExpoRoot, RequireContext } from 'expo-router';

export default function App() {
  const ctx = require.context('./app'); // Adjust the path as needed
  return <ExpoRoot context={ctx as RequireContext} />;
}

registerRootComponent(App);

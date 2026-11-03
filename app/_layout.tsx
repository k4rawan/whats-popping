import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="create-party" options={{ title: 'Create Private Party', headerStyle: { backgroundColor: '#07070b' }, headerTintColor: '#fff' }} />
    </Stack>
  );
}

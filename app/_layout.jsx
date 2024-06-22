import { Stack } from "expo-router";
import { ClerkProvider,SignedIn,SignedOut } from "@clerk/clerk-expo"
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen"

export default function RootLayout() {
  return (
    <ClerkProvider  publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </SignedIn>
    <SignedOut>
          <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}

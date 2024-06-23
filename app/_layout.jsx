import { Stack } from "expo-router";
import { ClerkProvider,SignedIn,SignedOut } from "@clerk/clerk-expo"
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen"
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
  })
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

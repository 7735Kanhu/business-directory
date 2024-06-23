import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen";
import { useFonts } from "expo-font";
import * as SecureStore from 'expo-secure-store';

const linking = {
  prefixes: ["https://your-app-url.com"],
  config: {
    screens: {
      "(tabs)": {
        path: "tabs",
      },
    },
  },
};

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  });

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Stack linking={linking} screenOptions={{ headerShown: false }}>
        <SignedIn>
          <Stack.Screen name="(tabs)" />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </Stack>
    </ClerkProvider>
  );
}
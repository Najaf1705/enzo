import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'; // Adjust the import path based on your project setup
import { View, Text } from 'react-native';
import LoginScreen from'./../components/LoginScreen';
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
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
  const [fontsLoaded] = useFonts({
    'foont-light': require('./../assets/fonts/Teko-Light.ttf'),
    'foont-medium': require('./../assets/fonts/Teko-Medium.ttf'),
    'foont-bold': require('./../assets/fonts/Teko-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ClerkProvider 
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    tokenCache={tokenCache}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <SignedIn>
          <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="index" /> */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

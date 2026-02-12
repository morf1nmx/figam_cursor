// src/app/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './navigation.types';
import LoginScreen from 'screens/auth/LoginScreen';
import HomeScreen from 'screens/auth/HomeScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Futuro:
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
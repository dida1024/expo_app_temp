import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks/';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const user = useAppSelector(state => state.auth.user);

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen}
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerBackTitle: ' ',
              headerTintColor: '#000',
              headerShadowVisible: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}
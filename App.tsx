/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import SignInScreen from './src/views/screens/SignInScreen';
import SignUpScreen from './src/views/screens/SignUpScreen';
import NewPasswordScreen from './src/views/screens/NewPasswordScreen';
import ForgotPasswordScreen from './src/views/screens/ForgotPasswordScreen';
import ConfirmEmailScreen from './src/views/screens/ConfirmEmailScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="NewPaswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

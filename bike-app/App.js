import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Interface from "./screens/Interface";
import Home from "./screens/Home";

import { theme } from './core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './screens';

import {MaleScreen} from './screens/MaleScreen';
import {FemaleScreen} from './screens/FemaleScreen';
import {KidsScreen} from './screens/KidsScreen';
 

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false,  }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Interface" component={Interface} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
          
          <MainNavigator.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          
          <MainNavigator.Screen name="Dashboard" component={Dashboard} />
      
          <MainNavigator.Screen name="StartScreen" component={StartScreen} />
          <MainNavigator.Screen name="RegisterScreen" component={RegisterScreen} />
          <MainNavigator.Screen name="MaleScreen" component={MaleScreen} />
          <MainNavigator.Screen name="FemaleScreen" component={FemaleScreen} />
          <MainNavigator.Screen name="KidsScreen" component={KidsScreen} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

 

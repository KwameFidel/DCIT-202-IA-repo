import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View, Animated, Text, Image, TextInput,ImageBackground, TouchableOpacity,StyleSheet } from "react-native";


export default function StartScreen({ navigation }) {
  return (
    <Background>
      
      <Logo />
      <Header><Text style={{ fontSize: 17,color: "#4dabf7", fontWeight: "bold" }}>SHOES SPEAK LOUDER THAN WORDS</Text></Header>
      
      
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
      
    </Background>
  )
}

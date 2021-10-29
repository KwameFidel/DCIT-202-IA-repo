import React, { useRef }  from "react";
import { View, Animated, Text, Image, TextInput,ImageBackground, TouchableOpacity,StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{ 
        backgroundColor: "#a9e34b",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, color: "grey" }}>WELCOME TO</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>SNEAKERS STORE</Text>
    <ImageBackground source={require("./pictures/sneakerholic 1.png")} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
      
      
      
      <Text style={{ fontSize: 17,color: "#4c6ef5", fontWeight: "bold" }}>SHOES SPEAK LOUDER THAN WORDS</Text>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 60,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
      
        <Text style={{paddingLeft: 0, color: "white" }}>JOIN US</Text>
      </TouchableOpacity>

      </View>
  );
}



const styles = StyleSheet.create({
  
  image: {
    flex: 0,
    justifyContent: "space-evenly",
    width:350,
    height:450,
  },
  

 
});

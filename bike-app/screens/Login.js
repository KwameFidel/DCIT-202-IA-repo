import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Power Bike Shop</Text>
      {/* <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View> */}
      {/* <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> */}
     <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "rgb(215, 216, 219)",
        }}
      >
        <Image style={{height:24, width:24}} source={require('./goo.png')}/>
        <Text style={{ paddingLeft: 10, color: "white" }}>Login With Google</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login With Apple</Text>
      </TouchableOpacity>

      <View style={{paddingTop:15}}>
      <Text>Not a Member?<Text style={{color:"orange", fontWeight:"bolder"}}> SignUp</Text></Text>
      </View>
    </View>
  );
}

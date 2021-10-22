import React from "react";
import { View,Text , TouchableOpacity,Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home(params) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" style={{marginLeft:15}} />
        </View>
      </View>
      <Text style={{fontSize:20, marginTop:15,marginBottom:10}}>
     <Text style={{color:"rgb(196, 196, 196)"}}>The World's<Text style={{color:"orange",
     fontWeight:"bolder"}}> Best Bike</Text></Text></Text>

     <Text style={{fontWeight:"bolder"}}>Categories</Text> 

     <View style={{  flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
      <View style={{backgroundColor:"rgb(250, 250, 250)",borderRadius:20,padding:10,}}><TouchableOpacity><Text style={{textAlign:"center", color:"orange"}} >All</Text></TouchableOpacity></View>
     

     <View style={{ backgroundColor:"rgb(250, 250, 250)",borderRadius:20,}}><TouchableOpacity><Text style={{padding:7,textAlign:"center",marginTop:5,color:"rgb(196, 196, 196)"}}>Roadbike</Text></TouchableOpacity></View>
     
    

    <View style={{backgroundColor:"rgb(250, 250, 250)",borderRadius:20,}}><TouchableOpacity><Text style={{padding:7,textAlign:"center",marginTop:5,color:"rgb(196, 196, 196)"}}>Mountain</Text></TouchableOpacity></View>

    <View style={{backgroundColor:"rgb(250, 250, 250)",borderRadius:20,}}><TouchableOpacity><Text style={{padding:7,textAlign:"center", marginTop:5,color:"rgb(196, 196, 196)"}}>Urban</Text></TouchableOpacity></View>
     
    
    </View>
    <View>
      <View style={{backgroundColor:"rgb(250,250,250)",width:230, height:230, marginTop:15,padding:20,borderRadius:17}}>
      <Image style={{height:210, width:200,}} source={require('./bike1.png')}/>
      
      </View>
    


    </View>
    
    
    
    
    
    </View>
  );
}

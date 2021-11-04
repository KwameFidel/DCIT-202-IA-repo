import React from "react";
import { View,Text,Button,TouchableOpacity, StyleSheet, Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";

export default function Home(params) {
  const navigation = params.navigation;
  return (
    
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
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
        <TouchableOpacity onPress={() => {
          navigation.navigate("LoginScreen");

        }}>
        <Image source={require('./pictures/sneakersplash.png')} style={{width:40,height:40}}/>
        </TouchableOpacity>
        <View>
     <Text style={{ color: '#080A50', fontFamily: 'sans-serif-medium',fontWeight:"bolder",fontSize:30,textAlign:"center", textShadowColor: '#000', textShadowOffset: { width: 0.7, height: 0.8 }, textShadowRadius: 4}}>SNEAKER<Text style={{color:"#f03e3e",fontSize:30}}>HOLIC</Text></Text></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
        </View>

      </View>
       <Text style={{ fontSize: 18, color: "grey", marginTop:15, }}>The World's 
       <Text style={{color:"orange"}}> Best Sneakers</Text>
       </Text>
       <Text style={{color:"black", fontWeight:"bolder",marginTop:15}}>Categories </Text>

       <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
      
        <TouchableOpacity style={styles.btn} onPress={() => {
          navigation.navigate();
          
        }}>
        <Text style={{color:"orange"}}>All</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => { 
            navigation.navigate('MaleScreen'); 
          }}style={styles.btn}>
        <Text>MALES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { 
            navigation.navigate('FemaleScreen'); 
          }}style={styles.btn}>
        <Text>FEMALES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { 
            navigation.navigate('KidsScreen'); 
          }} style={styles.btn}>
        <Text>KIDS</Text>

        </TouchableOpacity>
        

      
       
       
       </View>
       <View style={{
         flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          
          borderRadius:10,
          padding:5,
          marginTop:5,
       }}>

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./pictures/sneakerholic2.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Add To Cart</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>

 

       </View>




       
       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./pictures/sneakerholic3.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Add To Cart</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>

 

       </View>
       </View>



<View style={{
         flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          
          borderRadius:10,
          padding:5,
          marginTop:2,
          
       }}>

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5, }}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./pictures/sneakerholic4.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Add To Cart</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>

 

       </View>




       
       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./pictures/sneakerholic5.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Add To Cart</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>

 

       </View>
       </View>






      <View style={{ height:50, width:"auto", marginTop:20,flexDirection:"row",justifyContent: "space-between",
          alignItems: "center", }}>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
      <Ionicons name="home" size={20} style={{marginLeft:10, color:"orange"}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}>
      <Ionicons name="mic-circle" size={50} style={{marginBottom:40}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("cartlist");
        }}>
      <Ionicons name="cart-outline" size={20} style={{marginRight:10}} />
      </TouchableOpacity>

        
      </View>
      
       

    </View>
  );
}

const styles=StyleSheet.create({
  btn:{
    flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:"rgb(240, 241, 242)",
          borderRadius:10,
          padding:8,
          marginTop:15,
          

  }
})

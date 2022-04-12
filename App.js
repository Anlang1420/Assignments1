import React from "react";
import { ScrollView,StyleSheet, Text, View,TextInput,Button, TouchableOpacity,Image } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.Char1}>

      <View>
        <TouchableOpacity style={styles.back}>
          <Image source={require("./anh/nutpast.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.Imagelabbit}>
      <Image source={require('./anh/labbit.png')} />
      </View>

      <View style={styles.Imagelogo}>
      <Image style={styles.Imagelogo1} source={require('./anh/tho.png')} />
      </View>

      <Image style={styles.Loginto} source={require("./anh/login1.png")} />

      <View style={styles.input}>
      <Image style={styles.icon} source={require("./anh/lathu.png")} />
        <TextInput  placeholder="Email" />
      </View>
      
      <View style={styles.input}>
      <Image style={styles.icon} source={require("./anh/pass.png")} />
        <TextInput placeholder="Password" />
        <Image style={styles.icon2} source={require("./anh/mi.png")} />
      </View>

      <View style={styles.button_login}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Login</Text>
      </View>

      <View style={{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        top: 70
        }}>
        <Text>Forgot Password? </Text>
        <Text style={{fontFamily:'bold',color:'black'}}>Click Here</Text>
      </View>
     
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#ffd834'
  },
  Char1 : {
    top:100,
  },

  Imagelabbit:{
    justifyContent:'center',
    alignItems:'center',
    top: -90,
    left: 3
  },
  Imagelogo:{
    justifyContent:'center',
    alignItems:'center',
    right:14,
    bottom:50
  },

  Loginto:{
    alignItems: 'center',
    resizeMode: "stretch",
    bottom: 40,
    height: 28,
    width: 215,
    left:69
  },

  text: {
    marginTop: 20,
    fontSize: 35,
  },

  button_login: {
    flexDirection:'row',
    height:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF6D03',
    borderRadius:100,
    top: 30
  },

  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },

  input1:{
    
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:100,
    width: 40,
    height: 40,
    bottom: 50,

  },

  input:{
    
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:100,
    paddingLeft:20,
    paddingRight:20,
    width: 350,
    bottom: 0,
    marginBottom:10

  },

  icon: {
    width:30,
    height:30,
    marginRight:10,
    alignSelf:'center'
  },
  icon2: {
    width:30,
    height:30,
    left: 165,
    alignSelf:'center'
  },
  
  back:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    bottom: 50,
  },

});

export default App;
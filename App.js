import React, {useState} from "react";
import { ScrollView,StyleSheet, Text, View,TextInput,Button, TouchableOpacity,Image } from "react-native";
import FlashMessage, { showMessage, hideMessage} from "react-native-flash-message";
import { validateEmail, validatePassword } from './src/validation';

const App = () => {
  const ShowMessage = (message, description, type)=>{
    showMessage({
      message: message,
      description: description,
      type: type,
      position:'top',
      floating: 'true',

    })
  }
  const [state, setState ]= useState({
 email:'',
 password:'',
  });
  const [error, setErrors] = useState({ email:'', password:''})

  const onSubmit=()=>{
    const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);
    // setErrors ({ email: emailError, password: passwordError});
    if (emailError === null || passwordError === null){
      ShowMessage('Sucess','Login Sucess','success')
    }
    else{
      ShowMessage('Error','Wrong Password or Email','danger')
    }
  }
  return(
    
    <View style={styles.container}>
      <ScrollView style={ styles.styleScroll}>
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
        <TextInput  placeholder="Email" 
        onChangeText={text => setState({ ... state, email: text.toLocaleLowerCase() })}
        value={state.email}/>
      </View>
      
      <View style={styles.input}>
      <Image style={styles.icon} source={require("./anh/pass.png")} />
        <TextInput placeholder="Password" 
         onChangeText={text => setState({ ... state, password: text })}
         value={state.password}/>
        <Image style={styles.icon2} source={require("./anh/mi.png")} />
        
      </View>

      
    
        <TouchableOpacity style = {styles.button_login} onPress = {() => onSubmit()}>
          <Text style={styles.textbuton}>Login</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage style={styles.styleMessError} position="top" textStyle={{textAlign:'center', fontSize:16}}  titleStyle={{textAlign:'center', fontSize:15}}  />

      <View style={{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        top: 70
        }}>
        <Text>Forgot Password? </Text>
        <Text style={{fontFamily:'bold',color:'black'}}>Click Here</Text>
        
      </View>
      </ScrollView>
      </View>
     
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    height:'100%',
    alignItems: "center",
    backgroundColor: '#ffd834'
  },
  styleScroll:{
    flex:1,
  },
  Char1 : {
    flex:1,
    padding:'10%',
    justifyContent: 'flex-end',
    marginTop:30,
    marginLeft:-10
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
  textbuton:{},

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
    top: 30,
  },
  Errortext: {
    color: 'red',
    paddingBottom: 5,
    paddingLeft: 5,
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bol0d',
    fontSize: 18,
  },

  input1:{
    flexDirection:'row',
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
  styleMessError:{
    position:'relative',
    marginTop: 8
    
  }

});

export default App;
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
const Login =({navigation}) => { 
  const [name,setName]=React.useState("");
  const [age,setAge]=React.useState("");
  return (
    <View style={{
      flex:1,
    }}>
      <View style={{
        flex:1,
      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
      marginTop:70,
    }}>  
    <TextInput
    onChangeText={(text) => {
       setName(text);
     }}
     value={name}
     secureTextEntry={true}

     style={{
       backgroundColor: "#e9e9e9",
       height: 50,
       width: 250,

       borderWidth: 1,
       borderColor: "white",
       paddingVertical:10,
       paddingHorizontal:10,
      
       
     }}
     placeholder=" Enter your Name"
   /> 
    <TextInput
    onChangeText={(text) => {
       setAge(text);
     }}
     value={age}
     

     style={{
       backgroundColor: "#e9e9e9",
       height: 50,
       width: 250,

       borderWidth: 1,
       borderColor: "white",
       
       paddingHorizontal:10,
      
       
     }}
     placeholder=" Enter your Age"
   /> 
  <View style={{
    flex:2,
    //justifyContent:"center",
    marginVertical:30,
  }}>
 
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate("home")
       
    }}
    style={{
      height:40,
      width:100,
      borderRadius:9,
      backgroundColor:"#00ce67",
      
      justifyContent:"center",
      
    }}>
<Text style={{
  fontSize:18,
  fontWeight:"bold",
  alignContent:"center",
  alignSelf:"center"
}}>Login</Text>
    </TouchableOpacity>
    </View>
     </View>
     </View>
  )
}

export default Login
const styles = StyleSheet.create({})












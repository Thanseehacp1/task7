import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Login =({navigation}) => { 
  
  return (
    
      <View style={{
        flex:1,
      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
      marginTop:70,
    }}>  
   
    <TouchableOpacity
    onPress={()=>
      navigation.navigate('home',{name:'THANSI'})
       
    }
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
   
    
     
  )
}

export default Login
const styles = StyleSheet.create({})












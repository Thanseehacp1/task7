import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'; 

const Splash = () => {
    const navigation=useNavigation();
    React.useEffect(()=>{
      
      
        setTimeout(()=>{
          navigation.navigate('login');
    },3000);
},[])
  return (
   <View style={{
    flex:1,
    
    backgroundColor:"#ff6cb6"
   }}>
    <View style={{
      flex:1,
    justifyContent:"center",
    alignSelf:"center",
    alignContent:"center",
    alignItems:"center",
    
   }}>
      
      
      <Text style={{
justifyContent:"center",
        fontSize:30,
        fontWeight:"bold",
       
        
      }}>SPLASH</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
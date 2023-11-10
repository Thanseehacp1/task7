import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
        backgroundColor:"#3e7b7b",
justifyContent:"center",

    }}>
     
      
      
      <Text style={{
        fontSize:40,
        fontWeight:"bold",
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",
      }}>splash</Text>
      </View>
    
  )
}

export default Splash

const styles = StyleSheet.create({})
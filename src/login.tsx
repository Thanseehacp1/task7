import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={{
      flex:1,
      backgroundColor:"#ffa851",
    }}>
      <Text style={{
        fontSize:18,
        fontWeight:"bold",
        marginTop:80,
        
        alignSelf:"center",
      }}>Login</Text>
      
      <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('registration')
        }}
      style={{
        height:40,
        width:100,
        borderRadius:10,
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:"center",
        marginTop:20,
        marginHorizontal:40,
      }}>
        <Text>Registration</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
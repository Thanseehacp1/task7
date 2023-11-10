import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      flex:1,
      backgroundColor:"#ff9b9b",
    }}>
    <View style={{
        height:50,
        backgroundColor:'black',
        justifyContent:'center'
    }}>
        <TouchableOpacity 
          onPress={()=>{
            navigation.goBack()
          }}
        style={{
            marginLeft:10,
            width:50,
            height:30,
            justifyContent:'center',
            alignItems:'center'
        }}>
         <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
   </View>
    <View style={{
      height:40,
      width:250,
      borderRadius:10,
      alignSelf:"center",
      justifyContent:"center",
      backgroundColor:"white",
      marginVertical:50,
      alignContent:"center",
    }}>
<Text style={{
  alignItems:"center",
  justifyContent:"center",
  alignSelf:"center",
}}>Registration completed</Text>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
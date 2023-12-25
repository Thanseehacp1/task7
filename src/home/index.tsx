import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1 from '../tab1'
import tab2 from '../tab2'


const Home=  ({route})=>
 {
  return(
  <View style={{
    flex:1,
   
  }}>
  <View style={{
    flex:1,
    justifyContent:"center",
    alignSelf:"center",
    alignContent:"center",
    alignItems:"center",
  }}>
   <Text style={{
    fontSize:20,
    fontWeight:"bold",
    justifyContent:"center",
   
   
  }}>welcome {route.params.name}'s profile
  </Text>
  </View>
  </View>
  );
}
  const Tab = createBottomTabNavigator();
  function Mytabs(){
 
  return (
    
    
    <Tab.Navigator
  
    screenOptions={{
     headerShown: false,
    }}
    >
    <Tab.Screen name="Tab1" component={tab1} />
   <Tab.Screen name="Tab2" component={tab2} />
  </Tab.Navigator>
  
  
  )
  
  }


export default Home

const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1 from '../tab1'
import tab2 from '../tab2'
import { useRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator(); 
const Home = () => {
  

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
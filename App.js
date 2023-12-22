

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/splash";
import Login from './src/login';
import Home from "./src/home";

const StackN = createNativeStackNavigator();


const App = () => {
  return (
    
    <NavigationContainer>
      <StackN.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          
        }}
        initialRouteName="Splash"
      >
      <StackN.Screen name="Splash" component={Splash}/>
     
       <StackN.Screen name="login" component= {Login}/>
       <StackN.Screen name="home" component= {Home}/>
        
      </StackN.Navigator>
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
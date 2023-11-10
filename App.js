

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./src/login";
import registration from "./src/registration";
import Splash from "./src/splash";


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
      <StackN.Screen name="Splash"
      component={Splash}/>
        <StackN.Screen
          name="login"
          component={login}
          options={{ title: "My home" }}
        />
        <StackN.Screen name="registration" component={registration} />
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
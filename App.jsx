import React from 'react';
import {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  
 
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
   
    <>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <NavigationContainer>
  <Tab.Navigator initialRouteName="signup">
    <Tab.Screen name="signup" component={Signup} />
    <Tab.Screen name="login" component={Login} />
  </Tab.Navigator>
</NavigationContainer>; */}
  
<NavigationContainer>
     <Stack.Navigator>
        
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



export default App;

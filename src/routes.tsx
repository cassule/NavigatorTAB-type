import React from "react";
import { Text, View  } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/buttom-tabs"

import Home from './pages/Home'
import Compras from './pages/Compras'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" componet={Home} />
        <Tab.Screen name="Compras" componet={Compras} />
      </ Tab.Navigator>
    </ NavigationContainer>
  )
}
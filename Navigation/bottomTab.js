import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Dimension, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

import Home from "../Screens/Home";
7;
const Tab = createBottomTabNavigator();

//remove background colour from TabNavigator

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          style: {
            height: 30,
            backgroundColor: "#202020",
          },
          showLabel: false,
          activeTintColor: "blue",
        },
      }}
    >
      <Tab.Screen
        name="HomeS"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="red" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;

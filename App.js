import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home";
import details from "./Screens/details";
import Login from "./Screens/Login";
import Cart from "./Screens/Cart";
import BottomNavigator from "./Navigation/bottomTab";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator.Navigator>
          <MainNavigator.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
          />
          <MainNavigator.Screen
            name="Home"
            component={BottomNavigator}
            options={{ header: () => null }}
          />
          <MainNavigator.Screen
            name="details"
            component={details}
            options={{ header: () => null }}
          />
          <MainNavigator.Screen
            name="Cart"
            component={Cart}
            options={{ header: () => null }}
          />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

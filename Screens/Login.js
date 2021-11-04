import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <Text style={{ color: "white" }}>Log in</Text>
      <Text>Log in with one of the following options</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text>Email</Text>
      <TextInput placeholder="example@gmail.com" style={{}} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        style={{}}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "white",
          padding: 10,
          paddingHorizontal: 60,
          borderRadius: 10,
          marginTop: 10,
          marginRight: 200,
          alignItems: "center",
        }}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10 }}>
        Dont have an account
        <Text style={{ color: "orange", fontWeight: "bold" }}>Sign up</Text>
      </Text>
    </View>
  );
}

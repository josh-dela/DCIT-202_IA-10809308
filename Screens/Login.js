import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={{ backgroundColor: "grey", flex: 1 }}>
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
      <TextInput
        placeholder="example@gmail.com"
        style={{
          borderWidth: 1,
          padding: 8,
          margin: 10,
          weight: 200,
        }}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        style={{
          borderWidth: 1,
          padding: 8,
          margin: 10,
          weight: 200,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 10,
          paddingHorizontal: 60,
          borderRadius: 10,
          marginTop: 10,
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

import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#131313",
        flex: 1,
        padding: 40,
      }}
    >
      <View style={{ padding: 20, marginTop: 30 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            paddingRight: 10,
          }}
        >
          Log in
        </Text>
      </View>
      <Text style={{ color: "grey", marginTop: 18 }}>
        Log in with one of the following options
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#202020",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
            width: 150,
            borderColor: "#9dc5c3",
            borderWidth: 2,
          }}
        >
          <AntDesign name="google" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#202020",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
            width: 150,
            borderColor: "#9dc5c3",
            borderWidth: 2,
          }}
        >
          <AntDesign name="apple1" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 30, color: "grey", fontWeight: "bold" }}>
        Email
      </Text>
      <TextInput
        placeholder="example@gmail.com"
        style={{
          height: 50,
          backgroundColor: "#202020",
          borderRadius: 10,
          borderColor: "#9dc5c3",
          borderWidth: 2,
          padding: 10,
          marginTop: 5,
          color: "white",
        }}
      />
      <Text style={{ color: "grey", marginTop: 9, fontWeight: "bold" }}>
        Password
      </Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        style={{
          height: 50,
          backgroundColor: "#202020",
          borderRadius: 10,
          borderColor: "#9dc5c3",
          borderWidth: 2,
          padding: 10,
          marginTop: 5,
          color: "white",
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{}}>
        <LinearGradient
          colors={["#8F00FF", "#AE30FF", "#B840FF"]}
          style={{
            padding: 10,
            paddingHorizontal: 60,
            borderRadius: 10,
            marginTop: 20,
            alignItems: "center",
            height: 50,
          }}
        >
          <Text style={{ fontWeight: "bold", flex: 1, color: "white" }}>
            Log in
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 10, color: "grey" }}>
          Dont have an account?...
          <Text style={{ color: "white", fontWeight: "bold" }}>..Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

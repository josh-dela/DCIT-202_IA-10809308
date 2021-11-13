import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {
  return (
    <View style={style.mainContainer}>
      <View style={{ padding: 20 }}>
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
        <TouchableOpacity style={style.googleButton}>
          <AntDesign name="google" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.appleButton}>
          <AntDesign name="apple1" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 30, color: "grey", fontWeight: "bold" }}>
        Email
      </Text>
      <TextInput
        placeholder="example@gmail.com"
        style={style.emailInputField}
      />
      <Text style={{ color: "grey", marginTop: 9, fontWeight: "bold" }}>
        Password
      </Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        style={style.passwordInputField}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{}}>
        <LinearGradient
          colors={["#8F00FF", "#AE30FF", "#B840FF"]}
          style={style.gradientSignUp}
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
const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#131313",
    flex: 1,
    padding: 35,
    justifyContent: "center",
  },
  googleButton: {
    backgroundColor: "#202020",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    width: 150,
    borderColor: "#9dc5c3",
    borderWidth: 2,
  },
  appleButton: {
    backgroundColor: "#202020",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    width: 150,
    borderColor: "#9dc5c3",
    borderWidth: 2,
  },
  passwordInputField: {
    height: 50,
    backgroundColor: "#202020",
    borderRadius: 10,
    borderColor: "#9dc5c3",
    borderWidth: 2,
    padding: 10,
    marginTop: 5,
    color: "white",
  },
  emailInputField: {
    height: 50,
    backgroundColor: "#202020",
    borderRadius: 10,
    borderColor: "#9dc5c3",
    borderWidth: 2,
    padding: 10,
    marginTop: 5,
    color: "white",
  },
  gradientSignUp: {
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    height: 45,
  },
});

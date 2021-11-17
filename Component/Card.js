import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { shoes } from "../assets/shoes"; //remove

const width = Dimensions.get("screen").width / 2 - 30;

export const Card = ({ shoe }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("details", shoe)}>
      <View style={style.card}>
        <View style={{ alignItems: "flex-end" }}>
          <MaterialIcons name="favorite-border" size={24} color="#8F00FF" />
        </View>
        <View
          style={{
            alignContent: "center",
            flex: 1,
            resizeMode: "contain",
          }}
        >
          <Image
            style={{ marginTop: 42, height: "50%", width: "auto" }}
            source={shoe.img}
          />
        </View>
        <View style={{}}></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            marginTop: 10,
            color: "white",
          }}
        >
          {shoe.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5D8AA8" }}>
            ${shoe.price}
          </Text>
          <View
            style={{
              height: 23,
              width: 23,
              backgroundColor: "grey",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  card: {
    height: 300,
    backgroundColor: "#202020",
    elevation: 10,
    width,
    marginHorizontal: 4,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
});

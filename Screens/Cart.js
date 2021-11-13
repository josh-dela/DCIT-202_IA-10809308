import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { shoes } from "../assets/shoes";

export default function Cart({ navigation }) {
  const CartCard = ({ shoe }) => {
    return (
      <View style={style.cartCard}>
        <Image source={shoe.img} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{shoe.name}</Text>
          <Text style={{ fontSize: 13, color: "blue" }}>{shoe.name}</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ${shoe.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
          <View style={style.actionButton}>
            <AntDesign name="google" size={18} color="white" />
            <AntDesign name="google" size={18} color="white" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ marginTop: 30, flex: 1, backgroundColor: "#131313" }}
    >
      <View style={style.header}>
        <Ionicons
          name="chevron-back-circle-outline"
          size={18}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Cart
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={shoes}
        renderItem={({ item }) => <CartCard shoe={item} />}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Total Price
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                $50
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#8F00FF", "#AE30FF", "#B840FF"]}
                  style={style.gradientSignUp}
                >
                  <Text style={{ fontWeight: "bold", flex: 1, color: "white" }}>
                    Check out
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "grey",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    width: 80,
    height: 30,
    backgroundColor: "yellow",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
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

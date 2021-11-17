import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";

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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ${shoe.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>4 pieces</Text>
          <View style={style.actionButton}>
            <AntDesign name="plus" size={18} color="black" />
            <AntDesign name="minus" size={24} color="black" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 20, backgroundColor: "#131313" }}
    >
      <View style={style.header}>
        <Ionicons
          name="arrow-back-sharp"
          size={26}
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
              <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
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
    backgroundColor: "#5D8AA8",
    borderRadius: 30,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
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

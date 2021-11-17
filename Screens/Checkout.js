import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";

const width = Dimensions.get("screen").width / 2 - 30;

export default function Checkout({ navigation }) {
  const categories = ["Credit", "Cash", "Paypal"];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <View style={style.categoriesContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryText,
                categoryIndex == index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#202020" }}>
      <View style={style.header}>
        <Ionicons
          name="arrow-back-sharp"
          size={26}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Checkout
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5D8AA8" }}>
          Price
        </Text>
      </View>
      <View>
        <Text style={{ color: "violet", fontSize: 20 }}>$20034.45</Text>
      </View>
      <CategoryList />
      <Text style={{ marginTop: 30, color: "grey", fontWeight: "bold" }}>
        Card Number
      </Text>
      <View style={style.cardNumberField}>
        <FontAwesome5 name="cc-mastercard" size={24} color="black" />
        <TextInput
          placeholder="---- ---- ---- ----"
          style={{ height: 50, flex: 1, borderRadius: 10, color: "white" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "grey", fontWeight: "bold" }}>Valid Until</Text>

          <TextInput
            placeholder="MM/YY"
            style={{
              height: 40,
              borderRadius: 10,
              color: "white",
              backgroundColor: "#202020",
              borderRadius: 10,
              borderColor: "#9dc5c3",
              borderWidth: 2,
              padding: 10,
              marginTop: 5,
              color: "white",
              width,
            }}
          />
        </View>
        <View>
          <Text style={{ color: "grey", fontWeight: "bold" }}>CVV</Text>

          <TextInput
            placeholder="4 digit"
            style={{
              height: 40,
              borderRadius: 10,
              color: "white",
              backgroundColor: "#202020",
              borderRadius: 10,
              borderColor: "#9dc5c3",
              borderWidth: 2,
              padding: 10,
              marginTop: 5,
              color: "white",
              width,
            }}
          />
        </View>
      </View>
      <Text style={{ color: "grey", marginTop: 9, fontWeight: "bold" }}>
        Card Holder
      </Text>
      <TextInput placeholder="Full Name" style={style.cardHolderField} />
      <TouchableOpacity onPress={() => alert("Payment Successful")}>
        <LinearGradient
          colors={["#8F00FF", "#AE30FF", "#B840FF"]}
          style={style.gradientPay}
        >
          <Text style={{ fontWeight: "bold", flex: 1, color: "white" }}>
            Pay
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    marginHorizontal: 7,
    marginTop: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 14, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: "white",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#9dc5c3",
  },
  cardNumberField: {
    height: 50,
    backgroundColor: "#202020",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "#9dc5c3",
  },
  cardHolderField: {
    height: 50,
    backgroundColor: "#202020",
    borderRadius: 10,
    borderColor: "#9dc5c3",
    borderWidth: 2,
    padding: 10,
    marginTop: 5,
    color: "white",
  },
  gradientPay: {
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    height: 45,
  },
});

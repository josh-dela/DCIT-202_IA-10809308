//import { Navigation } from "react-navigation";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//import MyTabs from "./Screens/bottomTabs";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground,
} from "react-native";

import { shoes } from "../assets/shoes";

const width = Dimensions.get("screen").width / 2 - 30;

export default function Home({ navigation }) {
  const categories = ["Shoes", "CLothing", "Furniture", "Bicycle"];

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

  const Card = ({ shoe }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("details", shoe)}>
        <View style={style.card}>
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover",
            }}
            source={shoe.img}
          >
            <View style={{ alignItems: "flex-end" }}>
              <MaterialIcons name="favorite-border" size={24} color="#8F00FF" />
            </View>
            <View style={{ flex: 1 }}></View>
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
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
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
                <Text
                  style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
                >
                  +
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#131313" }}
    >
      <View style={{ marginTop: 50, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <AntDesign name="search1" size={18} color="white" />
          <TextInput placeholder="search" style={style.input} />
        </View>
        <View style={{ marginTop: 7 }}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
      </View>
      <CategoryList />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={shoes}
        renderItem={({ item }) => <Card shoe={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  searchContainer: {
    height: 40,
    backgroundColor: "#202020",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    color: "white",
    flex: 1,
    marginLeft: 5,
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
  card: {
    height: 300,
    backgroundColor: "#202020",
    width,
    marginHorizontal: 4,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
});

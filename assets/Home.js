//import { Navigation } from "react-navigation";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
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
} from "react-native";

import { plants } from "../assets/plants";

const width = Dimensions.get("screen").width / 2 - 30;

export default function Home({ navigation }) {
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

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

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("details", plant)}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <AntDesign name="google" size={18} color="red" />
          </View>
          <View style={{ height: 100, alignItems: "center" }}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={plant.img}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: "green",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, color: "blue", fontWeight: "bold" }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to </Text>
        </View>
        <AntDesign name="apple1" size={24} color="white" />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <AntDesign
            name="apple1"
            size={24}
            color="white"
            style={{ marginLeft: 20 }}
          />
          <TextInput placeholder="search" style={style.input} />
        </View>
        <View style={style.sortButton}></View>
        <AntDesign name="google" size={24} color="red" />
      </View>
      <CategoryList />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={plants}
        renderItems={({ item }) => <Card plant={item} />}
      />
      <View>
        <Text>WHat the hell</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: "grey",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    flex: 1,
  },
  sortButton: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignItems: "center",
  },
  categoriesContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: "red",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "green",
  },
  card: {
    height: 225,
    backgroundColor: "red",
    width,
    marginBottom: 20,
    padding: 15,
  },
});

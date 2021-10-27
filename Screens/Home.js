import React, { useState } from "react";
//import MyTabs from "./Screens/bottomTabs";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Home() {
  const [collection, setCollection] = useState([
    { name: "Shoes", key: "1" },
    { name: "Watches", key: "2" },
    { name: "Bags", Key: "3" },
    { name: "Mobile Accessories", Key: "4" },
    { name: "Clothings", Key: "5" },
    { name: "Skin Care", Key: "6" },
    { name: "Plant", Key: "7" },
    { name: "Coming soon", key: "8" },
    { name: "Coming soon", key: "9" },
    { name: "Coming soon", key: "10" },
    { name: "Coming soon", key: "11" },
    { name: "Coming soon", key: "12" },
    { name: "Coming soon", key: "13" },
    { name: "Coming soon", key: "14" },
    { name: "Coming soon", key: "15" },
    { name: "Coming soon", key: "16" },
    { name: "Coming soon", key: "17" },
    { name: "Coming soon", key: "18" },
    { name: "Coming soon", key: "19" },
    { name: "Coming soon", key: "20" },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Text>Categories</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>Favorites</TouchableOpacity>
        <TouchableOpacity>All Categories</TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={collection}
        renderItem={({ item }) => <Text style={styles.item}>{item.name} </Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "grey",
    marginTop: "24",
    marginHorizontal: 10,
    justifyContent: "space-between",
    marginVertical: 20,
    width: 200,
  },
});

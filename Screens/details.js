import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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

export default function details({ navigation, route }) {
  const shoe = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#202020" }}>
      <View style={style.header}></View>
      <Ionicons
        name="chevron-back-circle-outline"
        size={50}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={style.imageContainer}>
        <Image
          source={shoe.img}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "contain",
            flex: 1,
          }}
        />
      </View>
      <View style={style.detailsContainer}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
            Under Development.....Dont Touch
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}> Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "yellow",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{shoe.name}</Text>
          <View style={style.priceTag}>
            <Text style={{ marginLeft: 15, color: "pink", fontSize: 16 }}>
              ${shoe.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "blue",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {shoe.about}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "blue",
            }}
          >
            <View style={style.borderButton}>
              <Text style={style.borderButtonText}>+</Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: "bold",
              }}
            >
              1
            </Text>
            <View style={style.borderButton}>
              <Text style={style.borderButtonText}>-</Text>
            </View>
          </View>
          <View style={style.buyButton}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Buy
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: "grey",
    marginHorizontal: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: "black",
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: "green",
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  borderButton: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  borderButtonText: {
    fontWeight: "bold",
    fontSize: 28,
  },
  buyButton: {
    width: 150,
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

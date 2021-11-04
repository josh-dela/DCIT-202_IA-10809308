import React from "react";
import { AntDesign } from "@expo/vector-icons";
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
  const plant = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={style.header}></View>
      <AntDesign
        name="google"
        size={24}
        color="blue"
        onPress={() => navigation.goBack()}
      />
      <View>
        style = {style.imageContainer}
        <Image source={plant.img} style={{ resizeMode: "contain", flex: 1 }} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
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
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{plant.name}</Text>
          <View style={style.priceTag}>
            <Text style={{ marginLeft: 15, color: "pink", fontSize: 16 }}>
              ${plant.price}
            </Text>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}
            >
              {plant.about}
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={style.borderButton}>
                  <Text style={style.borderButtonText}>+</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWidth: "bold",
                  }}
                >
                  1
                </Text>
                <View style={style.borderButton}>
                  <Text style={style.borderButtonText}>-</Text>
                </View>
                <View style={style.buyButton}>
                  <Text
                    style={{ color: "red", fontSize: 18, fontWeight: "bold" }}
                  ></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text>ohk</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTOp: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: "red",
    marginHorizontal: 7,
    borderRadius: 2,
    marginTop: 30,
    paddingTOp: 30,
  },
  line: {
    width: 25,
    hight: 2,
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
    justifyCOntent: "center",
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

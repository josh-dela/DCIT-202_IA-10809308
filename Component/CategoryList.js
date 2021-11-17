import React from "react";

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export const CategoryList = () => {
  const categories = ["Shoes", "CLothing", "Furniture", "Bicycle"];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

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
const style = StyleSheet.create({
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
});

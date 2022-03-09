import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "GTA V",
      rating: 4,
      body: "This is GTA V",
      key: "1",
    },
    {
      title: "BF4",
      rating: 5,
      body: "This is BF 4",
      key: "2",
    },
    {
      title: "CS:GO",
      rating: 3,
      body: "This is Great CS:GO",
      key: "3",
    },
  ]);
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    //navigation.push("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

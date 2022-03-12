import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";

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
    {
      title: "Valorant",
      rating: 4,
      body: "This is Valorant game by RIOT",
      key: "4",
    },
  ]);
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    //navigation.push("ReviewDetails");
  };
  return (
    <ImageBackground
      source={require("../assets/me.jpg")}
      style={globalStyles.container}
    >
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

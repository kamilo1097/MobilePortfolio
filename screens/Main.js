import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

export default function Main({ navigation }) {
  const arrayOfMenu = [
    { title: "O Mnie", direction: "AboutMe", key: "1" },
    { title: "Moje projekty", direction: "MyProjects", key: "2" },
    { title: "Ceny", direction: "Costs", key: "3" },
    { title: "Biznes", direction: "Contact", key: "4" },
  ];
  return (
    <ImageBackground
      source={require("../assets/me.jpg")}
      style={globalStyles.container}
    >
      {/**Stworzenie listy buttonów */}

      <FlatList
        horizontal={true}
        style={globalStyles.menuContainer}
        data={arrayOfMenu}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.direction)}
            style={globalStyles.tileMenu}
          >
            <Text style={globalStyles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.signContainer}>
        <Text style={styles.sign}>Kamil</Text>
        <Text style={styles.sign}>Kwaczyński</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  sign: {
    color: "#fff",
    fontSize: 32,
  },
  signContainer: {
    marginBottom: 30,
  },
});

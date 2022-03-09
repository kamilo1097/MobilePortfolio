import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

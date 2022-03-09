import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 1,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 20,
    flex: 2,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 30,
    flex: 1,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 40,
    flex: 3,
  },
});

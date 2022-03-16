import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
export default function HeaderComponent({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <AntDesign name="leftcircleo" size={28} onPress={goBack} />
      <Text style={styles.title}>Moje TODO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
});

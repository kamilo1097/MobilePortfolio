import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function MyProjects({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <AntDesign
        name="leftcircleo"
        size={28}
        onPress={goBack}
        style={globalStyles.backIcon}
      />
      <Text>MOJE PROJEKTY</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ToDoApp")}
        style={globalStyles.tileMenu}
      >
        <Text style={{ backgroundColor: "pink" }}>ToDoApp</Text>
      </TouchableOpacity>
    </View>
  );
}

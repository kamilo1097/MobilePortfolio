import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function About({ navigation }) {
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
      <Text>About screen</Text>
    </View>
  );
}

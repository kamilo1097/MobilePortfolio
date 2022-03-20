import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function BackButton({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  return <AntDesign name="leftcircleo" size={42} onPress={goBack} />;
}

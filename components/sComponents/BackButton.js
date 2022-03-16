import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function BackButton({ goBack }) {
  return <AntDesign name="leftcircleo" size={42} onPress={goBack} />;
}

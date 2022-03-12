import "react-native-gesture-handler";
import { useState } from "react";
import { Button, StyleSheet, View, FlatList, Text } from "react-native";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/Drawer";

export default function App() {
  let [loaded] = useFonts({
    robotoregular: require("./assets/fonts/Roboto-Regular.ttf"),
    robotobold: require("./assets/fonts/Roboto-Bold.ttf"),
    huballi: require("./assets/fonts/Hubballi-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}

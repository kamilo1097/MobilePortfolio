import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

import BackButton from "../components/sComponents/BackButton";
export default function MyProjects({ navigation }) {
  const projects = [
    { text: "ToDo App", direction: "ToDoApp", key: "1" },
    { text: "Reviews App", direction: "Reviews", key: "2" },
    { text: "Pokedex", direction: "PokedexMain", key: "3" },
  ];
  return (
    <View style={globalStyles.container}>
      <BackButton navigation={navigation} />
      <Text>MOJE PROJEKTY</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.direction)}>
            <Text style={{ backgroundColor: "pink" }}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

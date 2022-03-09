import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItemComponent({ item, onPressTodoItem }) {
  return (
    <TouchableOpacity onPress={() => onPressTodoItem(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color={"#333"} />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
});

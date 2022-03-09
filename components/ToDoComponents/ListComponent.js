import { View, FlatList, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import TodoItemComponent from "./TodoItemComponent";
import AddToDoComponent from "./AddToDoComponent";

export default function ListComponent() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: "1" },
    { text: "Create app", key: "2" },
    { text: "Play on PC", key: "3" },
  ]);
  const onPressTodoItem = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Ops", "W todo musi znajdować się co najmniej 3 znaki", [
        { text: "Rozumiem", onPress: () => console.log("alert zamknięty") },
      ]);
    }
  };
  return (
    <>
      <AddToDoComponent submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItemComponent item={item} onPressTodoItem={onPressTodoItem} />
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex: 1,
  },
});

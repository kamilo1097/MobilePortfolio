import { View, FlatList, Alert, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import TodoItemComponent from "./TodoItemComponent";
import AddToDoComponent from "./AddToDoComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListComponent() {
  const [todos, setTodos] = useState([]);
  const onPressTodoItem = (key) => {
    setTodos((prevTodos) => {
      const todosAfterRemove = prevTodos.filter((todo) => todo.key != key);

      saveData(todosAfterRemove);
      return todosAfterRemove;
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        const newTodos = [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ];
        saveData(newTodos);

        return newTodos;
      });
    } else {
      Alert.alert("Ops", "W todo musi znajdować się co najmniej 3 znaki", [
        { text: "Rozumiem", onPress: () => console.log("alert zamknięty") },
      ]);
    }
  };
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem("ToDos", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    if (todos !== null) {
      try {
        const jsonValue = await AsyncStorage.getItem("ToDos");
        if (jsonValue == null) {
          setTodos([]);
        } else {
          setTodos(JSON.parse(jsonValue));
        }
      } catch (error) {}
    }
  };
  useEffect(() => {
    getData();
  }, []);

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

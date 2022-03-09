import { Text, StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";

export default function AddToDoComponent({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="nowe todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add TODO"
        color="coral"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import ListComponent from "./ToDoComponents/ListComponent";
import HeaderComponent from "./ToDoComponents/HeaderComponent";

export default function ToDoApp({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dissmised keyboard");
      }}
    >
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} />
        <View style={styles.content}>
          {/* <AddToDoComponent /> */}
          <ListComponent />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
    flex: 1,
  },
});

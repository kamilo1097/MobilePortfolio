import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const goBack = () => {
    navigation.goBack();
  };
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      const allReviews = [review, ...currentReviews];
      saveData(allReviews);
      return allReviews;
    });
    setModalOpen(false);
  };

  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem("Reviews", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Reviews");
      if (jsonValue == null) {
        setReviews([]);
        return;
      }
      setReviews(JSON.parse(await jsonValue));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ImageBackground
      source={require("../assets/me.jpg")}
      style={globalStyles.container}
    >
      <AntDesign
        name="leftcircleo"
        size={28}
        onPress={goBack}
        style={globalStyles.backIcon}
      />
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      {reviews && (
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      )}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    color: "#fff",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    color: "#000",
  },
  modalContent: {
    flex: 1,
  },
});

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Pagination({ goToPrevPage, goToNextPage }) {
  return (
    <View style={styles.buttonContainer}>
      {goToPrevPage && (
        <TouchableOpacity onPress={goToPrevPage}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Previous</Text>
          </View>
        </TouchableOpacity>
      )}
      {goToNextPage && (
        <TouchableOpacity onPress={goToNextPage}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
    width: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

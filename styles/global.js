import { StyleSheet, Platform, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  titleText: {
    fontFamily: "huballi",
    fontSize: 32,
    color: "#fff",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 28,
    textTransform: "uppercase",
  },
  menuContainer: {
    flexDirection: "row",
    width: "100%",
  },
  tileMenu: {
    marginHorizontal: 24,
    height: 50,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,1)",
    paddingHorizontal: 10,
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};

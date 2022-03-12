import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import Header from "../shared/Header";
import React from "react";

const screens = {
  Default: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#ddd",
      height: 60,
    },
    headerTintColor: "#444",
  },
});
export default HomeStack;

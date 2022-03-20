import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Main from "../screens/Main";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

import Header from "../shared/Header";
import React from "react";
import Home from "../screens/Home";
import MyProjects from "../screens/MyProjects";
import ToDoApp from "../components/ToDoApp";
import Pokedex from "../screens/Pokedex/Pokedex";

const screens = {
  Default: {
    screen: Main,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      };
    },
  },
  AboutMe: {
    screen: About,
    navigationOptions: {
      title: "About Me",
    },
  },
  MyProjects: {
    screen: MyProjects,
    navigationOptions: {
      title: "Moje projekty",
    },
  },
  ToDoApp: {
    screen: ({ navigation }) => {
      return <ToDoApp navigation={navigation} />;
    },
    navigationOptions: {
      title: "ToDoApp",
    },
  },
  Reviews: {
    screen: ({ navigation }) => {
      return <Home navigation={navigation} />;
    },
    navigationOptions: {
      title: "Reviews",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "ReviewDetails",
    },
  },
  PokedexMain: {
    screen: Pokedex,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#ddd",
      height: 60,
    },
    headerTintColor: "#444",
    headerShown: false,
  },
});
export default createAppContainer(HomeStack);

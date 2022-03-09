import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Default: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      //headerStyle: {
      // backgroundColor: "#ddd",
      //},
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      //headerStyle: {
      //backgroundColor: "#ddd",
      //},
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#bbb",
      height: 60,
    },
    headerTintColor: "#444",
  },
});
export default createAppContainer(HomeStack);

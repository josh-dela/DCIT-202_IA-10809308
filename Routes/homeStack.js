import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Login from "../Screens/Login";

const screens = {
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

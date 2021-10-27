import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Screens/Login.js";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

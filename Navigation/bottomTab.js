/*import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigator/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Dimension } from "react-native";

import Login from "./Screens/Login.js";
import Home from "./Screens/Home.js";
import Cart from "./Screens/Cart.js";

const fullScreenWidth = Dimension.get("window").width;

const Stack = createStackNavigator();
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default function Navigation(prop) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      /*screenOptions = {({route}) => ({headerTitle: () => <Text>Header</Text>,
      tabBarIcon: ({focused,color,size,padding})=>{
        let iconNAme;
        if(route.name === 'Home' ){
          iconName = fo
        }
      }})}*/ /*
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/

/*<FlatList
  numColumns={2}
  data={collection}
  renderItem={({ item }) => <Text style={styles.item}>{item.name} </Text>}
/>;

/*borderWidth: 1,
padding: 8,
margin: 10,
weight: 200,*/

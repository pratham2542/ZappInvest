import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Deals from "./Deals/Deals";
import Ionicons from "react-native-vector-icons/Ionicons";
import Portfolio from"./Portfolio/Portfolio";
import Home from "./Home/HomeScreen";


function Account() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default Mainscreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { marginBottom: 7.5 },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Deals") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Portfolio") {
            iconName = focused ? "cash" : "cash-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#056ffa",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Deals" component={Deals} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

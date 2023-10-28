import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Deals from "../Screens/MainScreen/Deals/Deals";
import Portfolio from"../Screens/MainScreen/Portfolio/Portfolio";
import Home from "../Screens/MainScreen/Home/HomeScreen";
import Account from "../Screens/MainScreen/Account/ProfileScreen";


const Tab = createBottomTabNavigator();

export default Tabnavigator = () => {
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

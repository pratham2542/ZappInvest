import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Deals from "../Screens/MainScreen/Deals/Deals";
import Portfolio from"../Screens/MainScreen/Portfolio/Portfolio";
import Home from "../Screens/MainScreen/Home/HomeScreen";
import Account from "../Screens/MainScreen/Account/ProfileScreen";
import Screen1 from "../Screens/MainScreen/prathamscreens/screen1";
import Screen2 from "../Screens/MainScreen/prathamscreens/screen2";
import AuthContext from "../contexts/AuthContext";
import {useContext} from "react";

const Tab = createBottomTabNavigator();

export default Tabnavigator = () => {

  const authContext = useContext(AuthContext);
  const role = authContext.role;

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
          } else if (route.name === "Deals"|| route.name === "Startups") {
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
      <Tab.Screen name="Home" component={role=="investor"?Screen1:Screen2} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name={role=="investor"?"Deals":"Startups"} component={Deals} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

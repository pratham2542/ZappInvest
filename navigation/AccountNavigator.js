import ProfileScreen from "../components/MainScreen/Account/ProfileScreen";
import EditProfileScreen from "../components/MainScreen/Account/EditProfileScreen"
import { createStackNavigator } from "@react-navigation/stack";
import BankDetailScreen  from "../components/MainScreen/Account/BankDetailsScreen"

const Stack = createStackNavigator();
AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
       <Stack.Screen name="profie" component={ProfileScreen} />
      <Stack.Screen name="editdetail" component={EditProfileScreen} />
      <Stack.Screen name="bankdetail" component={BankDetailScreen}/>
    </Stack.Navigator>
  );
};

export default AccountNavigator;

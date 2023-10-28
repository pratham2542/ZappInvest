import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/StartScreen/LoginAndSignup/LoginScreen";
import Signupscreen from "../Screens/StartScreen/LoginAndSignup/SignUpScreen";
import Slider from "../Screens/StartScreen/SliderComponent/components/slider";
import Details from "../Screens/MainScreen/Deals/Details";
import Mainscreen from "../Screens/MainScreen/Mainscreen";
import EditProfileScreen from "../Screens/MainScreen/Account/EditProfileScreen";
import BankDetailScreen from "../Screens/MainScreen/Account/BankDetailsScreen";
import InvestorScreen from "../Screens/MainScreen/Account/InvesterScreen";
import DetailsInvestorScreen from "../Screens/MainScreen/Account/DetaiIInvestorScreen";
import StartupFormScreen from '../Screens/MainScreen/Account/StartupFormScreen'
const Stack = createStackNavigator();

stack1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={Signupscreen} />
      <Stack.Screen name="mainscreen" component={Mainscreen} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="editdetail" component={EditProfileScreen} />
      <Stack.Screen name="bankdetail" component={BankDetailScreen}/>
      <Stack.Screen name="investor" component={InvestorScreen} />
      <Stack.Screen name="investordetails" component={DetailsInvestorScreen}/>
      <Stack.Screen name="startupForm" component={StartupFormScreen}/>
    </Stack.Navigator>
  );
};

export default stack1;
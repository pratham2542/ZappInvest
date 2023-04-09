import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/StartScreen/LoginAndSignup/LoginScreen";
import Signupscreen from "../components/StartScreen/LoginAndSignup/SignUpScreen";
import Slider from "../components/StartScreen/SliderComponent/components/slider";
import Details from "../components/MainScreen/Deals/Details";
import Mainscreen from "../components/MainScreen/Mainscreen";
import EditProfileScreen from "../components/MainScreen/Account/EditProfileScreen";
import BankDetailScreen from "../components/MainScreen/Account/BankDetailsScreen";
import InvestorScreen from "../components/MainScreen/Account/InvesterScreen";
import DetailsInvestorScreen from "../components/MainScreen/Account/DetaiIInvestorScreen";

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
    </Stack.Navigator>
  );
};

export default stack1;
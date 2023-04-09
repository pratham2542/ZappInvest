import { createStackNavigator } from "@react-navigation/stack";
import InvestorScreen from "../components/MainScreen/Account/InvesterScreen";
import DetailsInvestorScreen from "../components/MainScreen/Account/DetaiIInvestorScreen";
const Stack = createStackNavigator();
QuestionNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="investor" component={InvestorScreen} />
        <Stack.Screen name="investordetails" component={DetailsInvestorScreen}/>
      </Stack.Navigator>
    );
  };
export default QuestionNavigator;  
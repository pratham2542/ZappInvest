import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StartupCard from "../../Cards/StartupCard";
import Data from "./StartUpCardData";

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

export default Deals = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    navigation.navigate("details");
    console.log("Clicked");
  };

  return (
    
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        renderItem={({ item }, idx) => {
          if (item != 0) {
            return (
              <View style={{ margin: 15, marginBottom: 15, marginTop: 0 }}>
                <StartupCard
                  item={item}
                  data={Data[item - 1]}
                  handlePress={handlePress}
                />
              </View>
            );
          } else {
            return (
              <View>
                <Text
                  style={{
                    fontFamily: "Inter_800ExtraBold",
                    fontSize: 25,
                    margin: 30,
                    marginLeft: 15,
                    marginTop: 45,
                  }}
                >
                  Live Opportunities
                </Text>
                <View style={{ marginHorizontal: 15 }}>
            
                </View>

                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 18,
                    margin: 30,
                    marginLeft: 15,
                    marginBottom: 0,
                  }}
                >
                  Featured campaigns
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    margin: 30,
                    marginLeft: 15,
                    color: "grey",
                    marginTop: 5,
                  }}
                >
                  Explore what is trending
                </Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

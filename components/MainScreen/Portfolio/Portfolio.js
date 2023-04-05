import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PortfioliCard from "../../Cards/PortfolioCard";

export default Portfolio = ({ navigation }) => {
  const [Profit, setProfit] = useState(true);
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#056ffa", height: 300 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 25,
            marginTop: 45,
          }}
        >
          <Icon name="account-circle-outline" size={35} color="white" />
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Hi, Pratham
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 13, marginHorizontal: 25 }}>
            Your Invested ammount is
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              marginHorizontal: 25,
            }}
          >
            ₹ 14,732.5
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "relative",
          backgroundColor: "white",
          height: 120,
          marginHorizontal: 25,
          borderRadius: 20,
          top: -60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          elevation: 10,
          shadowColor: "grey",
        }}
      >
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Current value
          </Text>
          <Text style={{ fontSize: 15 }}>₹ 15,000</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            borderStartColor: "black",
            borderStartWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
            Profit
          </Text>
          {Profit ? (
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
              15.5%
            </Text>
          ) : (
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
              -8.6%
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          position: "relative",
          backgroundColor: "white",
          height: 470,
          marginHorizontal: 25,
          borderRadius: 20,
          top: -40,
          elevation: 10,
          shadowColor: "grey",
        }}
      >
        <View
          style={{
            margin: 25,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            My Startup Portfolio
          </Text>
          <Pressable>
            <Icon name="arrow-right" size={30} />
          </Pressable>
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 15 }}>
            <PortfioliCard profit={Profit} />
            <PortfioliCard profit={Profit} />
            <PortfioliCard profit={Profit} />
            <PortfioliCard profit={Profit} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

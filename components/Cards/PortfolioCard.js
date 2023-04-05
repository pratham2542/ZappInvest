import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";


const USPCard = ({profit}) => {

  return (
    <Card style={styles.card}>
      <View style={{ margin: 15, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/gradientWithBG.png")}
          style={styles.image}
        />
        <Title style={styles.title}>Reviews</Title>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View>
          <Text>Portfolio value</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹ 5,800</Text>
        </View>
        {profit ? (
          <View style={{ alignItems: "flex-end" }}>
            <Icon name="arrow-up-right" size={25} color="green" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
              16.4%
            </Text>
          </View>
        ) : (
          <View style={{ alignItems: "flex-end" }}>
            <Icon name="arrow-down-right" size={25} color="red" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
              -16.4%
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
};

export default USPCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    marginVertical: 10,
    shadowColor:"white",

  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft:15
  },
  description: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize: 12,
  },
});

import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const CreateCard = () => {
  return (
    <Card
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "white",
        borderColor: "#d4f1f9",
        borderWidth: 0.4,
      }}
    >
      <View style={{ borderRadius: 15 }}>
        <ImageBackground
          source={require("../../assets/uper.jpeg")}
          imageStyle={{
            borderRadius: 15,
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 0,
          }}
          style={{
            height: 55,
            width: "100%",
          }}
          resizeMode={"stretch"}
        >
          <View style={{ margin: 10, marginTop: 15 }}>
            <Card.Content>
              <Text style={styles.subscribe}>SUBSCRIBE FOR</Text>
            </Card.Content>
            <Card.Content>
              <Text style={styles.price}>$5,000</Text>
            </Card.Content>
          </View>
        </ImageBackground>
      </View>

      <ImageBackground
        source={require("../../assets/lower.jpeg")}
        imageStyle={{
          width: "100%",
          borderRadius: 15,
          borderTopLeftRadius: 0,
          height: 70,
        }}
        style={{
          width: "100%",
        }}
      >
        <View style={styles.description}>
          <Card.Content>
            <Paragraph style={styles.getRewards}>GET REWARDS</Paragraph>
            <Paragraph style={styles.offOnProduct}>Off on products</Paragraph>
            <Paragraph style={styles.offers}>
              {`\u2022 `}10% discount on all products
            </Paragraph>
          </Card.Content>
        </View>
      </ImageBackground>
    </Card>
  );
};

export default CreateCard;

const styles = StyleSheet.create({
  cover: {
    height: 55,
    width: 55,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "white",
  },
  subscribe: {
    color: "white",
    fontSize: 8,
    // fontFamily: "Inter_600SemiBold",
  },
  price: {
    color: "white",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  description: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 0,

    padding: 8,
    borderRadius: 15,
    borderWidth: 0,
  },
  offOnProduct: {
    // fontFamily: "Inter_600SemiBold",
    fontWeight: "bold",
    fontSize: 13,
  },
  getRewards: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize: 9,
  },
  offers: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize: 11,
    margin: 10,
    marginTop:5
  },
});

import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const CreateCard = () => {
  return (
    <Card style={{ backgroundColor: "white", borderRadius: 15 }}>
      <View style={{ borderRadius: 15 }}>
        <ImageBackground
          source={require("../../assets/uper.jpeg")}
          imageStyle={{
            borderRadius: 15,
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 0,
          }}
          style={{
            height: 70,
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
    height: 65,
    width: 65,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "white",
  },
  subscribe: {
    color: "white",
    fontSize: 10,
    // fontFamily: "Inter_600SemiBold",
  },
  price: {
    color: "white",
    fontSize: 22,
    // fontFamily: "Inter_600SemiBold",
  },
  description: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 0,

    padding: 15,
    borderRadius: 15,
    borderWidth: 0,
  },
  offOnProduct: {
    // fontFamily: "Inter_600SemiBold",
    fontWeight: "bold",
    fontSize: 17,
  },
  getRewards: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize: 10,
  },
  offers: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize: 15,
    margin: 10,
    marginTop: 15,
  },
});

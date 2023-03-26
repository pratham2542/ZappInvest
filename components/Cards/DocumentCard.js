import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const DocumentCard = () => {
  return (
    <Card style={styles.card}>
      <View style={{ flexDirection: "row"}}>
        <View style={{ flex: 0.8 }}>
          <Card.Content>
            <Title style={styles.title}>COI</Title>
            <Paragraph style={styles.description}>
              Certificate of Incorporation
            </Paragraph>
          </Card.Content>
        </View>
        <View
          style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
        >
          <Card.Cover
            source={require("../../assets/gradientWithBG.png")}
            style={styles.cover}
            resizeMode={"contain"}
          />
        </View>
      </View>
    </Card>
  );
};

export default DocumentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    backgroundColor: "#e1eefe",
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: "#056ffa",
    marginTop : 10,
  },
  cover: {
    height: 35,
    width: 35,
    borderRadius: 10,
    // backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#056ffa",
  },
  description: {
    color: "grey",
    marginBottom: 10,
    fontSize : 12
  },
});

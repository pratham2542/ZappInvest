import * as React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const DocumentCard = () => {
  return (
    
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.8 ,marginLeft:15}}>
            
              <Title style={styles.title}>COI</Title>
              <Paragraph style={styles.description}>
                Certificate of Incorporation
              </Paragraph>
           
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={require("../../../assets/gradientWithBG.png")}
              style={styles.cover}
              resizeMode={"contain"}
              borderRadius={10}
            />
          </View>
        </View>
      </View>
    
  );
};

export default DocumentCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#f0f8ff",
    opacity:0.8,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: "#056ffa",
    marginTop: 8,
  },
  cover: {
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#056ffa",

  },
  description: {
    color: "grey",
    marginBottom: 5,
    fontSize: 11,
  },
});

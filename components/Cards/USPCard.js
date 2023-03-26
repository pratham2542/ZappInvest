import * as React from "react";
import { Image, StyleSheet } from "react-native";
import {  Card, Title, Paragraph } from "react-native-paper";
// import {
//   useFonts,
//   Inter_900Black,
//   Inter_600SemiBold,
// } from "@expo-google-fonts/inter";

const USPCard = () => {
  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  //   Inter_600SemiBold,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image source={require("../../assets/gradientWithBG.png")} style = {styles.image}/>
        <Title style={styles.title}>Reviews</Title>
        <Paragraph style={styles.description}>
          40% repeat rates & 79% products have 4+ Star Reviews| 93000 Reviews
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default USPCard;

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    marginTop : 10
  },
  image: {
    height: 40,
    width: 40,
    borderRadius : 10,
  },
  title: {
    // fontFamily: "Inter_900Black",
    fontSize : 16,
    fontWeight: '500',
  },
  description: {
    // fontFamily: "Inter_600SemiBold",
    color: "grey",
    fontSize : 12,
  },
});

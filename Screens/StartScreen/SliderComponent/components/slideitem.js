import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const { width, height } = Dimensions.get("screen");
const SlideItem = ({ item }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={Styles.container}>
      <Image source={item.img} resizeMode="contain" style={Styles.image} />
      <View style={Styles.content}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.description}>{item.description}</Text>
        <Text style={Styles.description}>{item.description2}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const Styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },

  image: {
    flex: 0.6,
    width: "100%",
  },
  content: {
    flex: 0.3,
    marginTop: 0,
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter_900Black",
    fontSize: 20,
    color: "black",
    marginBottom: 15,
  },
  description: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "#a7a7a7",
  },
});

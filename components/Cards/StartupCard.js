import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

const CreateCard = ({ data, handlePress }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  const image = {
    uri: data.image,
  };

  return (
    <Card mode="outlined" style={styles.card} onPress={handlePress}>
      <View style={styles.cover}>
        <ImageBackground
          source={image}
          imageStyle={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          style={{
            height: 200,
            width: "100%",
          }}
          resizeMode={"stretch"}
        ></ImageBackground>
      </View>
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <ImageBackground
            source={require("../../assets/review.png")}
            style={styles.icon}
          ></ImageBackground>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>{data.name}</Text>
          </View>
        </View>
        <View>
          <Paragraph style={styles.description}>{data.description}</Paragraph>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 12.5, fontWeight: "bold", color: "#acacac" }}
            >
              Raised
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15 }}
            >{`${data.raised} %`}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{ fontSize: 12.5, fontWeight: "bold", color: "#acacac" }}
            >
              Min. Subscription
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15 }}
            >{`₹ ${data.minimum}`}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 2.5,
          }}
        >
          {data.tags.map((key, x) => {
            return (
              <Text key={key} style={styles.tag}>
                {data.tags[x]}
              </Text>
            );
          })}
        </View>
      </View>
    </Card>
  );
};

export default CreateCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fbfbfb",
    borderRadius: 10,
    borderColor: "#ebebeb",
  },
  cover: { borderRadius: 10 },
  icon: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    marginRight: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
    fontFamily: "Inter_700Bold",
  },
  description: {
    color: "grey",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  tag: {
    borderColor: "#e0e0e0",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 11,
    marginVertical: 3.5,
  },
});

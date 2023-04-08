import React from "react";
import { View, Text } from "react-native";
import colors from "../config/colors";

function TextLineSeperator({ text }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "85%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#f7f7f7",
          height: 1,
          flex: 1,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          paddingHorizontal: 5,
          fontSize: 10,
          color: colors.light,
        }}
      >
        {text}
      </Text>
      <View
        style={{
          backgroundColor: "#f7f7f7",
          height: 1,
          flex: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
}

export default TextLineSeperator;

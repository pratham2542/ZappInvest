import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";

function GoogleCard({
  name,
  size = 40,
  backgroundColor = "#fff",
  iconColor = "#4285F4",
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      </View>
      <Text>Continue with google</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent:"center",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#f7f7f7",
  },
});
export default GoogleCard;

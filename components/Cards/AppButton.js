import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function AppButton({ title, onPress, color = "primary",width= "100%"}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width: width }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;


import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../../config/colors";

function AppTextInput({ title,width="100%",...otherProps }) {
  return (
    <View style={[styles.container,{width:width}]}>
      <TextInput
        placeholder={title}
        placeholderTextColor={colors.light}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF0F4",
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  
});

export default AppTextInput;

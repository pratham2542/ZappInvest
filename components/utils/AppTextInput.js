import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../config/colors";

function AppTextInput({style = {},handleChange,name, placeholder,width="100%",...otherProps }) {
  return (
    <View style={[styles.container,{width:width}]}>
      <TextInput
        style = {[styles.text, style]}
        placeholder={placeholder}
        placeholderTextColor={colors.light}
        onChangeText={handleChange(name)}
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
  text:{
    flex: 1,
  }
  
});

export default AppTextInput;

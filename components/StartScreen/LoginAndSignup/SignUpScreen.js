import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../utils/AppButton"
import GoogleCard from "../../Cards/GoogleCard";
import TextLineSeperator from "./TextLineSeperator";
import AppTextInput from "../../utils/AppTextInput";
import Screen from "../../MainScreen/Screen";


function SignupScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Get Started</Text>
      </View>
      <View style={{marginHorizontal:10}}>
        <GoogleCard name={"google"} />
      </View>

      <TextLineSeperator text={"OR SIGNUP  WITH EMAIL"} />
      <View style={{ marginHorizontal: 20, flexDirection: "column" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppTextInput title={"First Name"} width="48%" />
          <AppTextInput title={"Last Name"} width="48%" />
        </View>
        <AppTextInput title={"Email"} />
      </View>

      <View style={styles.loginButton}>
        <Text>
          <Text style={styles.lightText}>By continuing you agree to our </Text>
          <Text style={styles.impText}>Terms & Conditions</Text>
          <Text style={styles.lightText}> and</Text>{" "}
          <Text style={styles.impText}>Privacy Policy</Text>
        </Text>
        <AppButton
          title={"Sign Up"}
          onPress={() => {
            navigation.navigate("login");
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={styles.lightText}> Already have an Account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text style={styles.impText}> Login instead</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  loginButton: {
    marginHorizontal: 30,
  },
  lightText: {
    color: colors.light,
    fontSize: 12,
  },
  impText: {
    color: colors.primary,
    fontSize: 12,
  },
  restText: {
    marginLeft: 100,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default SignupScreen;

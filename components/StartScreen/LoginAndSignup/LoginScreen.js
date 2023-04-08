import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../utils/AppButton"
import GoogleCard from "../../Cards/GoogleCard";
import TextLineSeperator from "./TextLineSeperator";
import AppTextInput from "../../utils/AppTextInput";
import Screen from "../../MainScreen/Screen";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation, props }) {
  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Log in</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <GoogleCard name={"google"} />
      </View>
      <TextLineSeperator text={"OR LOG IN WITH EMAIL"} />
      <View style={{ marginHorizontal: 15 }}>
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
          title={"Log in"}
          onPress={async() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "mainscreen" }],
              })
            );
            try {
              await AsyncStorage.setItem("loggedin", "true");
            } catch (e) {
              console.log("login error");
            };
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
          <Text style={styles.lightText}> Don't have Account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <Text style={styles.impText}>Sign up instead </Text>
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

export default LoginScreen;

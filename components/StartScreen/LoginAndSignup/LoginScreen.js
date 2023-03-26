import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../Cards/AppButton";
import GoogleCard from "../../Cards/GoogleCard";
import TextLineSeperator from "./TextLineSeperator";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";
import { CommonActions } from "@react-navigation/native";

function LoginScreen({navigation,props}) {

  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center"}}>
        <Text style={styles.heading}>Log in</Text>
      </View>
      <GoogleCard name={"google"} />
      <TextLineSeperator text={"OR LOG IN WITH EMAIL"} />
      <View style={{marginHorizontal:15}}><AppTextInput title={"Email"}/></View>
      
      <View style={styles.loginButton}>
        <Text>
          <Text style={styles.lightText}>By continuing you agree to our </Text>
          <Text style={styles.impText}>Terms & Conditions</Text>
          <Text style={styles.lightText}> and</Text>{" "}
          <Text style={styles.impText}>Privacy Policy</Text>
        </Text>
        <AppButton
          title={"Log in"}
          onPress={() => { 
            
            navigation.dispatch(CommonActions.reset({
              index: 0,
              routes: [
                { name: "mainscreen" }
              ]
            }))
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.impText}>
            <Text style={styles.lightText}> Don't have Account?</Text>Sign up
            instead{" "}
          </Text>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    justifyContent:"center"
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

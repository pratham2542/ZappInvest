import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../../components/utils/AppButton"
import GoogleCard from "../../../components/OtherComponents/Cards/GoogleCard";
import TextLineSeperator from "./TextLineSeperator";
import AppTextInput from "../../../components/utils/AppTextInput";
import Screen from "../../../components/utils/Screen";
import axios from 'axios';
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from 'yup';
import { Formik } from 'formik'
import ErrorMessage from '../../../components/utils/ErrorMessage'
import {SERVER_URL} from '../../../config/env'
import routes from '../../../routes/routes';

function SignupScreen({ navigation }) {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string().trim().required(),
    lastName: Yup.string().trim().required(),
    email: Yup.string().trim().required().email(),
    password: Yup.string().trim().required().min(5)
  })

  const handleSignup = async ({email, password, firstName, lastName}) => {
    console.log(SERVER_URL);
    axios.post(routes.signUpRoute, {
      email: email, 
      password: password, 
      firstName: firstName, 
      lastName: lastName
    })
    .then(async(res)=>{
      console.log(res.data);

      // if success then clearing the stack and adding a token in the local storage
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "mainscreen" }],
        })
      );
      try {
        await AsyncStorage.setItem("loggedin", "true");
      } catch (e) {
        console.log("Signup error");
      };
    })
    .catch(e=>{
      console.log(e);
    })
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: "mainscreen" }],
    //   })
    // );
    // try {
    //   await AsyncStorage.setItem("loggedin", "true");
    // } catch (e) {
    //   console.log("Signup error");
    // };

  }

  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Get Started</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <GoogleCard name={"google"} />
      </View>

      <TextLineSeperator text={"OR SIGNUP  WITH EMAIL"} />


      <Formik
        initialValues={{ email: '', password: '', firstName: '', lastName:'' }}
        onSubmit={(values)=>handleSignup(values)}
        validationSchema={signupSchema}
      >
        {({values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
          return (
            <>
              <View style={{ marginHorizontal: 20, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <AppTextInput 
                    placeholder={"First Name"} 
                    width="48%" 
                    value={values.firstName} 
                    handleChange= {handleChange}
                    touched = {touched}
                    errors = {errors}
                    onBlur={() => setFieldTouched('firstName')}
                    name = 'firstName'
                    autoCapitalize='none'
                    autoCorrect={false}
                    />

                  <AppTextInput 
                    placeholder={"Last Name"} 
                    width="48%" 
                    value={values.lastName} 
                    handleChange= {handleChange}
                    touched = {touched}
                    errors = {errors}
                    onBlur={() => setFieldTouched('lastName')}
                    name = 'lastName'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                <AppTextInput 
                  placeholder={"Enter email"} 
                  value={values.email} 
                  handleChange= {handleChange}
                  touched = {touched}
                  errors = {errors}
                  onBlur={() => setFieldTouched('email')}
                  name = 'email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  autoCorrect={false}
                  textContentType='emailAddress' // only work with ios ....used to automatically add the password stored in auto fill
                  />
                  {touched['email'] && <ErrorMessage errorMessage={errors.email}/>}


                <AppTextInput 
                  placeholder={"Enter password"} 
                  value={values.password} 
                  handleChange= {handleChange}
                  touched = {touched}
                  errors = {errors}
                  onBlur={() => setFieldTouched('password')}
                  name = 'password'
                  autoCapitalize='none'
                  autoCorrect={false}
                  textContentType='password'
                  secureTextEntry
                   />
                  {touched['password'] && <ErrorMessage errorMessage={errors.password}/>}
                  
                <Text style={styles.lightText}>By continuing you agree to our <Text style={styles.impText}>Terms & Conditions</Text><Text style={styles.lightText}> and</Text>{" "}<Text style={styles.impText}>Privacy Policy</Text></Text>
                <AppButton
                  title={"Sign Up"}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )
        }}
      </Formik>

      <View style={styles.loginButton}>

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

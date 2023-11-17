import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../../components/utils/AppButton"
import GoogleCard from "../../../components/OtherComponents/Cards/GoogleCard";
import TextLineSeperator from "./TextLineSeperator";
import AppTextInput from "../../../components/utils/AppTextInput";
import Screen from "../../../components/utils/Screen";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik'
import ErrorMessage from '../../../components/utils/ErrorMessage'
import { SERVER_URL } from '../../../config/env'
import routes from '../../../routes/routes';


function LoginScreen({ navigation, props }) {
  const loginSchema = Yup.object().shape({
    email: Yup.string().trim().required().email(),
    password: Yup.string().trim().required().min(5)
  })

  const handleLogin = async ({ email, password }) => {
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
  }
  // axios.post(routes.loginRoute, { email: email, password: password })
  //   .then(async (res) => {
  //     console.log(res);

  //     if (res.data.status > 400 && res.data.status < 500) {
  //       console.log(res.data);
  //     } else {
  //       if(res.data.status===200){
  //       }
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: "mainscreen" }],
  //         })
  //       );
  //       try {
  //         await AsyncStorage.setItem("loggedin", "true");
  //       } catch (e) {
  //         console.log("login error");
  //       };
  //     }
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   })

// }

return (
  <Screen style={styles.screen}>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.heading}>Log in</Text>
    </View>
    {/* <View style={{ marginHorizontal: 10 }}>
        <GoogleCard name={"google"} />
      </View>
      <TextLineSeperator text={"OR LOG IN WITH EMAIL"} /> */}

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => handleLogin(values)}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
        return (
          <>
            <View style={{ marginHorizontal: 20, flexDirection: "column" }}>
              <AppTextInput
                placeholder={"Enter email"}
                value={values.email}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                onBlur={() => setFieldTouched('email')}
                name='email'
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
                textContentType='emailAddress' // only work with ios ....used to automatically add the password stored in auto fill
              />
              {touched['email'] && <ErrorMessage errorMessage={errors.email} />}


              <AppTextInput
                placeholder={"Enter password"}
                value={values.password}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                onBlur={() => setFieldTouched('password')}
                name='password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
              />

              {touched['password'] && <ErrorMessage errorMessage={errors.password} />}

              <Text style={styles.lightText}>By continuing you agree to our <Text style={styles.impText}>Terms & Conditions</Text><Text style={styles.lightText}> and</Text>{" "}<Text style={styles.impText}>Privacy Policy</Text></Text>
              <AppButton
                title={"Login"}
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

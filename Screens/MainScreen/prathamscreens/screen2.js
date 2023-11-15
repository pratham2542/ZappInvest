import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import axios from "axios";
import routes from "../../../routes/routes";
import React, { useState, useEffect } from "react";
import colors from "../../../config/colors";
import AppButton from "../../../components/utils/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = imageWidth;

  const [sec1, setSec1] = useState(true);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  const [sec4, setSec4] = useState(false);
  const [startups, setStartups] = useState(null);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    console.log("Deals screen activate");
    axios
      .get(routes.startup)
      .then((res) => {
        if (res.data) {
          const result = res.data;
          if (result) {
            setStartups(result);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* section 1 */}
      <View>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              paddingRight: 20,
              fontSize: 35,
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Raise capital with ease and grow 10x faster
          </Text>
          <Text
            style={{ marginVertical: 10, fontFamily: "Roboto", fontSize: 17 }}
          >
            One stop platform for all startup investment. Register, Raise-Fund
            and relax, let your startup reach to people and grow
          </Text>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <AppButton
              width="40%"
              title="Register"
              onPress={() => navigation.navigate("startupForm")}
            />
          </View>
          <View style={{ marginBottom: 5 ,width: "40%",borderRadius:10}}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                
                backgroundColor:"#f1f1f1"
              }}
              onPress={() => navigation.navigate("startupForm")}
            >
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color:" rgb(119, 119, 119)"
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            resizeMode="center"
            style={{ width: "90%", height: imageHeight - 55 }}
            source={require("../../../assets/screen2_ill1.png")}
          />
        </View>
      </View>

      {/* section 2 */}

      <View style={{ marginHorizontal: 20 ,marginTop:15}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Why Join Us ?
        </Text>
        <Text style={{ marginTop: 10, fontSize: 15 }}>
            Zapp provide you a way of raising capital from your customers and make them part of your startup.
        </Text>
      </View>

      <View style={{paddingHorizontal:20,marginBottom:30}}>
        <View style={{backgroundColor:"rgba(64, 164, 255, 0.1)",borderRadius:10,marginTop:20,padding:20}}>
            <View>
                <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Raise capital with ease
                </Text>
            </View>
            <View>
                <Text>
                    Raise capital for your startup with ease and grow your startup with right mentor based on your sector and current requirement and wider audience.
                </Text>
            </View>
        </View>
        <View style={{backgroundColor:"rgba(64, 164, 255, 0.1)",borderRadius:10,marginTop:20,padding:20}}>
            <View>
                <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Raise capital with ease
                </Text>
            </View>
            <View>
                <Text>
                    Raise capital for your startup with ease and grow your startup with right mentor based on your sector and current requirement and wider audience.
                </Text>
            </View>
        </View>
        <View style={{backgroundColor:"rgba(64, 164, 255, 0.1)",borderRadius:10,marginTop:20,padding:20}}>
            <View>
                <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Raise capital with ease
                </Text>
            </View>
            <View>
                <Text>
                    Raise capital for your startup with ease and grow your startup with right mentor based on your sector and current requirement and wider audience.
                </Text>
            </View>
        </View>
       
      </View>

      {/* section 3 */}

      <View style={{ backgroundColor: "rgba(64, 164, 255, 0.183)" }}>
        <View style={{ paddingVertical: 30 }}>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Text
              style={{ fontWeight: "400", fontFamily: "serif", fontSize: 30 }}
            >
              4 step away to
            </Text>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              Raising Funds
            </Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>
              Raise capitalfor your startup with eease throught ZappInvest with
              different rounds like community round, angel round, private round
              and take your startup to new height with Zapp.
            </Text>

            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: colors.primary,
                textDecorationLine: "underline",
                marginTop: 5,
              }}
            >
              Create Account Now--{">"}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          {sec1 ? (
            <View
              style={{
                borderWidth: 2,
                borderColor: "rgb(5, 111, 250)",
                padding: 15,
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                1. Register your startup on Zapp
              </Text>
              <Text>
                Signup on the platform either using email or by google
                authentication
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{ paddingHorizontal: 15, paddingVertical: 20 }}
              onPress={() => {
                setSec1(true);
                setSec2(false);
                setSec3(false);
                setSec4(false);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                1. Register your startup on Zapp
              </Text>
            </TouchableOpacity>
          )}

          {sec2 ? (
            <View
              style={{
                borderWidth: 2,
                borderColor: "rgb(5, 111, 250)",
                padding: 15,
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                2. You will get Dashboard , then apply for funds
              </Text>
              <Text>
                Signup on the platform either using email or by google
                authentication
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{ paddingHorizontal: 15, paddingVertical: 20 }}
              onPress={() => {
                setSec1(false);
                setSec2(true);
                setSec3(false);
                setSec4(false);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                2. You will get Dashboard , then apply for funds
              </Text>
            </TouchableOpacity>
          )}
          {sec3 ? (
            <View
              style={{
                borderWidth: 2,
                borderColor: "rgb(5, 111, 250)",
                padding: 15,
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                3. Submit required Documents, and wait for verification
              </Text>
              <Text>
                Signup on the platform either using email or by google
                authentication
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{ paddingHorizontal: 15, paddingVertical: 20 }}
              onPress={() => {
                setSec1(false);
                setSec2(false);
                setSec3(true);
                setSec4(false);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                3. Submit required Documents, and wait for verification
              </Text>
            </TouchableOpacity>
          )}
          {sec4 ? (
            <View
              style={{
                borderWidth: 2,
                borderColor: "rgb(5, 111, 250)",
                padding: 15,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                4. Hurray! Funding Campaign is live
              </Text>
              <Text>
                Signup on the platform either using email or by google
                authentication
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{ paddingHorizontal: 15, paddingVertical: 20 }}
              onPress={() => {
                setSec1(false);
                setSec2(false);
                setSec3(false);
                setSec4(true);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                4. Hurray! Funding Campaign is live
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ alignItems: "center" }}>
          {sec1 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/screen2_sec1.png")}
            />
          ) : (
            <View></View>
          )}
          {sec2 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/screen2_sec2.png")}
            />
          ) : (
            <View></View>
          )}
          {sec3 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/screen2_sec3.png")}
            />
          ) : (
            <View></View>
          )}
          {sec4 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/screen2_sec4.png")}
            />
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <View style={{ backgroundColor: "#eee" }}></View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

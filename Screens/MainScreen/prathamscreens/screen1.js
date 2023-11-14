import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import axios from "axios";
import routes from '../../../routes/routes';
import React, { useState ,useEffect} from "react";
import colors from "../../../config/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import StartupCard from "../../../components/OtherComponents/Cards/StartupCard";
import CardCarousel from "../../../components/OtherComponents/Cards/CardCarousel";
import Data from "../Deals/StartUpCardData";
import LearnCard from "../../../components/OtherComponents/Cards/LearnCard";
import Screen from "../../../components/utils/Screen";
import AppButton from "../../../components/utils/AppButton";
import { Octicons } from "@expo/vector-icons";
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
    console.log('Deals screen activate');
    axios.get(routes.startup)
      .then((res) => {
        if (res.data) {
          const result = res.data;
          if (result) {
            setStartups(result);
          }
          
        }
      }).catch(error => {
        console.log(error)
      })

  }, [])

  return (
    <ScrollView style={styles.container}>
      {/* section 1 */}
      <View>
        <View style={{ margin: 20 }}>
          <Text
            style={{ fontSize: 35, fontWeight: "bold", fontFamily: "Roboto" }}
          >
            Become an early investor and invest in the future
          </Text>
          <Text
            style={{ marginVertical: 10, fontFamily: "Roboto", fontSize: 17 }}
          >
            One stop platform for all startup investment. Invest, exit and stay
            connected with startups on same platform
          </Text>
          <AppButton
            width="45%"
            title="Get Started"
            onPress={() => navigation.navigate("startupForm")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            resizeMode="center"
            style={{ width: "90%", height: imageHeight - 55 }}
            source={require("../../../assets/illustration3.png")}
          />
        </View>
      </View>

      {/* section 2 */}
      <View style={{flexDirection:"row",flexWrap:"wrap",padding:20,justifyContent:"space-evenly"}}>
        <View style={{alignItems:"center",marginHorizontal:25}}>
          <View>
            <Text style={{fontSize:35,fontWeight:"bold",color:colors.primary}}>8000+</Text>
          </View>
          <Text style={{fontSize:18,fontWeight:"bold"}}>Visitors</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <View>
            <Text style={{fontSize:35,fontWeight:"bold",color:colors.primary}}>100+</Text>
          </View>
          <Text style={{fontSize:18,fontWeight:"bold"}}>Startup registered</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <View>
            <Text style={{fontSize:35,fontWeight:"bold",color:colors.primary}}>500+</Text>
          </View>
          <Text style={{fontSize:18,fontWeight:"bold"}}>Registered user</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <View>
            <Text style={{fontSize:35,fontWeight:"bold",color:colors.primary}}>10+</Text>
          </View>
          <Text style={{fontSize:18,fontWeight:"bold"}}>Live startups</Text>
        </View>
      </View>

      {/* section 3 */}
      <View style={{ marginHorizontal: 20, alignItems: "center" ,marginTop:20}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Build your portfolio{" "}
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          as strong as you
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>are</Text>

        <Text style={{ marginTop: 10, fontSize: 15 }}>
          Welcome to Startup Market. Invest{" "}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 15 }}>
          In Highly-Vetted Startups
        </Text>
        <AppButton
          width="45%"
          title="Get Started"
          onPress={() => navigation.navigate("startupForm")}
        />
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={{ width: "85%", height: imageHeight - 25 }}
          source={require("../../../assets/illustration2.png")}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Browse startups on
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>ZappInvest</Text>
        <Text style={{ marginTop: 10, fontSize: 15 }}>
          Browse the best startup in India. Invest,{" "}
        </Text>
        <Text style={{ fontSize: 15 }}>
          track, exit and connect through ZappInvest
        </Text>


        <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={startups}
          renderItem={({ item }) => {
            return (
              <>
                {startups[0].startupName === item.startupName }
                <View style={{ margin: 15, marginBottom: 15, marginTop: 0 }}>
                  <StartupCard
                    item={item}
                    data={item}
                    handlePress={()=>handlePress(item)}
                  />
                </View>
              </>
            );
          }}
        />
      </View>


        <View style={{ alignItems: "center", margin: 15 }}>
          <AppButton
            width="55%"
            title="Discover Startups"
            onPress={() => navigation.navigate("startupForm")}
          />
        </View>
      </View>

      <View style={{ backgroundColor: "rgba(64, 164, 255, 0.063)" }}>
        <View style={{ paddingVertical: 30 }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontWeight: "400", fontFamily: "serif", fontSize: 30 }}
            >
              4 step away to
            </Text>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              startup investing
            </Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>
              Unlock curated startup investments with just INR 5000. Build a
              robust portfolio as impressive as you. Track and Viewersify
              investments effortlessly on a sleek dashboard and stay updated on
              your investments
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
                1. Join ZappInvest, create account
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
                1. Join ZappInvest, create account
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
                2. Do KYC, Add Bank Details
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
                2. Do KYC, Add Bank Details
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
                3. Browse Startup Deals
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
                3. Browse Startup Deals
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
                4. Invest
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
                4. Invest
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ alignItems: "center" }}>
          {sec1 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/sec1.png")}
            />
          ) : (
            <View></View>
          )}
          {sec2 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/sec2.png")}
            />
          ) : (
            <View></View>
          )}
          {sec3 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/sec3.png")}
            />
          ) : (
            <View></View>
          )}
          {sec4 ? (
            <Image
              resizeMode="center"
              style={{ width: "90%", height: imageHeight - 55 }}
              source={require("../../../assets/sec4.png")}
            />
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <View style={{backgroundColor:"#eee"}}>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

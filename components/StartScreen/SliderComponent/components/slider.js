import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Slides from "../data";
import SlideItem from "./slideitem";
import Pagination from "./pagination";
import AsyncStorage from "@react-native-async-storage/async-storage";


// add this dependencies in package.json  ==> "@expo-google-fonts/inter": "^0.2.3",


const Slider = ({ navigation }) => {
  const [logged, setLogged] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedin");
      console.log(value);
      if (value === "true") {
        setLogged(true);
        navigation.navigate('mainscreen');
      }
    } catch (e) {
      console.log("get login value error", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [index, setIndex] = useState(0);
  const [pg, setP] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };



  const handleOnviewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
    setP(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={{backgroundColor:"white"}}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnviewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination pg={pg} data={Slides} scrollX={scrollX} index={index} />
      {pg === 2 && (
        <View style={Styles.btngrp}>
          <TouchableOpacity  style={Styles.SignUpBtn} onPress={()=>{navigation.navigate('signup')}}>
            <Text style={Styles.SignUpBtnText}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.LoginBtn} onPress={() => { navigation.navigate('login') }}>
            <Text style={Styles.LoginBtnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Slider;

const Styles = StyleSheet.create({
  btngrp: {
    position: "absolute",
    bottom: 35,
    justifyContent: "center",
    width: "100%",
  },
  SignUpBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 50,
    backgroundColor: "#056ffa",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  SignUpBtnText: {
    fontSize: 12,
    fontFamily: "Inter_900Black",
    fontWeight: "bold",
    color: "white",
  },
  LoginBtnText: {
    fontSize: 12,
    fontFamily: "Inter_900Black",
    fontWeight: "bold",
    color: "black",
  },
});

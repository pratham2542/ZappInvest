import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StartupCard from "../../../components/OtherComponents/Cards/StartupCard";
import Data from "./StartUpCardData";
import { Searchbar } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_800ExtraBold, } from "@expo-google-fonts/inter";


const ToolBar = () => {
    let [fontsLoaded] = useFonts({ Inter_900Black, Inter_600SemiBold, Inter_800ExtraBold });

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [sec, setSec] = React.useState("");
  const [pri, setPri] = React.useState("");

  const price = [
    { key: "1", value: "All" },
    { key: "2", value: "5,000" },
    { key: "3", value: "5,000 - 10,000" },
    { key: "4", value: "10,000 - 20,000" },
    { key: "5", value: ">20,000" },
  ];
  const sector = [
    { key: "1", value: "All" },
    { key: "2", value: "Fintech" },
    { key: "3", value: "healthcare" },
    { key: "4", value: "Personal care" },
  ];

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = (item) => {
    navigation.navigate("details",item);
    console.log("Clicked");
  };

    return (
      <View>
        <Text
          style={{
            fontFamily: "Inter_800ExtraBold",
            fontSize: 25,
            margin: 30,
            marginLeft: 15,
            marginTop: 45,
          }}
        >
          Live Opportunities
        </Text>

        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            marginHorizontal: 15,
            borderRadius: 10,
            backgroundColor: "white",
            borderColor: "grey",
            borderWidth: 0.5,
            height: 45,
          }}
          inputStyle={{ marginTop: -6 }}
        />
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View style={{ flexGrow: 1, marginRight: 5 }}>
            <SelectList
              setSelected={(val) => setSec(val)}
              data={sector}
              save="value"
              maxHeight={160}
              placeholder={"Sector"}
            />
          </View>
          <View style={{ flexGrow: 1, marginLeft: 5 }}>
            <SelectList
              setSelected={(val) => setPri(val)}
              data={price}
              save="value"
              maxHeight={160}
              placeholder={"Price"}
            />
          </View>
        </View>

        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 18,
            margin: 30,
            marginLeft: 15,
            marginBottom: 0,
          }}
        >
          Featured campaigns
        </Text>
        <Text
          style={{
            fontSize: 12,
            margin: 30,
            marginLeft: 15,
            color: "grey",
            marginTop: 5,
          }}
        >
          Explore what is trending
        </Text>
      </View>
    );
  }

export default ToolBar;
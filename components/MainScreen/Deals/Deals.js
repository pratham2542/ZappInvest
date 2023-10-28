import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StartupCard from "../../Cards/StartupCard";
import Data from "./StartUpCardData";
import { Searchbar } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { SERVER_URL } from '../../../config/env';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_800ExtraBold, } from "@expo-google-fonts/inter";
import axios from "axios";

export default Deals = ({ navigation }) => {
  const [startups, setStartups] = useState(null);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    console.log('Deals screen activate');
    axios.get(`${SERVER_URL}/startup/`)
      .then((res) => {
        if (res.data) {
          const result = res.data;
          if (result) {
            setStartups(result);
          }
          // console.log("Startups in the useEffect : ", result[0]);
        }
      }).catch(error => {
        console.log(error)
      })

  }, [])
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

  const ToolBar = () => {
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

  return (
    <>
      {startups && <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={startups}
          renderItem={({ item }) => {
            return (
              <>
                {startups[0].startupName === item.startupName && <ToolBar/>}
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
      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});


// if(flag) {
//   return (
    // <View>
    //   <Text
    //     style={{
    //       fontFamily: "Inter_800ExtraBold",
    //       fontSize: 25,
    //       margin: 30,
    //       marginLeft: 15,
    //       marginTop: 45,
    //     }}
    //   >
    //     Live Opportunities
    //   </Text>

    //   <Searchbar
    //     placeholder="Search"
    //     onChangeText={onChangeSearch}
    //     value={searchQuery}
    //     style={{
    //       marginHorizontal: 15,
    //       borderRadius: 10,
    //       backgroundColor: "white",
    //       borderColor: "grey",
    //       borderWidth: 0.5,
    //       height: 45,
    //     }}
    //     inputStyle={{ marginTop: -6 }}
    //   />
    //   <View
    //     style={{
    //       marginHorizontal: 15,
    //       marginTop: 10,
    //       flexDirection: "row",
    //     }}
    //   >
    //     <View style={{ flexGrow: 1, marginRight: 5 }}>
    //       <SelectList
    //         setSelected={(val) => setSec(val)}
    //         data={sector}
    //         save="value"
    //         maxHeight={160}
    //         placeholder={"Sector"}
    //       />
    //     </View>
    //     <View style={{ flexGrow: 1, marginLeft: 5 }}>
    //       <SelectList
    //         setSelected={(val) => setPri(val)}
    //         data={price}
    //         save="value"
    //         maxHeight={160}
    //         placeholder={"Price"}
    //       />
    //     </View>
    //   </View>

    //   <Text
    //     style={{
    //       fontFamily: "Inter_900Black",
    //       fontSize: 18,
    //       margin: 30,
    //       marginLeft: 15,
    //       marginBottom: 0,
    //     }}
    //   >
    //     Featured campaigns
    //   </Text>
    //   <Text
    //     style={{
    //       fontSize: 12,
    //       margin: 30,
    //       marginLeft: 15,
    //       color: "grey",
    //       marginTop: 5,
    //     }}
    //   >
    //     Explore what is trending
    //   </Text>
    // </View>
//   );
// } 
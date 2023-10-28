import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StartupCard from "../../../components/OtherComponents/Cards/StartupCard";
import { SERVER_URL } from '../../../config/env';
import axios from "axios";
import Toolbar from "./Toolbar";
import routes from '../../../routes/routes';

export default Deals = ({ navigation }) => {
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
    <>
      {
        startups?<View><Toolbar/><View style={{ backgroundColor: "white" }}>
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
      </View></View>:<Toolbar/>
      }
       {/* {startups && <View style={{ backgroundColor: "white" }}>
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
      </View>}  */}
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
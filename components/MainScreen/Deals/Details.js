import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Tag from "../../utils/Tag";
import USPCard from "../../Cards/USPCard";
import DocumentCard from "../../Cards/DocumentCard";
import TeamMemberCard from "../../Cards/TeamMemberCard";
import HighLightCard from "../../Cards/HighLightCard";
import { List } from "react-native-paper";
import WebView from 'react-native-webview';


// const pitch = () => {
//   const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
//   return(
//     <>

//     </>
//     );
// }

const Team = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <View style={{ width: "49%" }}>
          <TeamMemberCard />
        </View>
        <View style={{ width: "49%" }}>
          <TeamMemberCard />
        </View>
        <View style={{ width: "49%" }}>
          <TeamMemberCard />
        </View>
        <View style={{ width: "49%" }}>
          <TeamMemberCard />
        </View>
      </View>
    </View>
  );
};

const Faq = () => {
  return (
    <List.Section>
      <List.Accordion
        title="Uncontrolled Accordion"
        style={{ color: "#056ffa", backgroundColor: "white", marginLeft: -15 }}
        color="#056ffa"
      >
        <Text>
          Zapp Invest is an investing platform where anyone can invest in
          startups with just INR 5000
        </Text>
      </List.Accordion>
      <List.Accordion
        title="Uncontrolled Accordion"
        style={{ color: "#056ffa", backgroundColor: "white", marginLeft: -15 }}
        color="#056ffa"
      >
        <Text>
          Zapp Invest is an investing platform where anyone can invest in
          startups with just INR 5000
        </Text>
      </List.Accordion>
      <List.Accordion
        title="Uncontrolled Accordion"
        style={{ color: "#056ffa", backgroundColor: "white", marginLeft: -15 }}
        color="#056ffa"
      >
        <Text>
          Zapp Invest is an investing platform where anyone can invest in
          startups with just INR 5000
        </Text>
      </List.Accordion>
      <List.Accordion
        title="Uncontrolled Accordion"
        style={{ color: "#056ffa", backgroundColor: "white", marginLeft: -15 }}
        color="#056ffa"
      >
        <Text>
          Zapp Invest is an investing platform where anyone can invest in
          startups with just INR 5000
        </Text>
      </List.Accordion>
    </List.Section>
  );
};

const Details = () => {
  const [pitchButton, setPitchButton] = useState(true);
  const [faqButton, setFaqButton] = useState(false);
  const [teamButton, setTeamButton] = useState(false);

  const handleTabSwitchButton = (name) => {
    if (name === "pitch") {
      setPitchButton(true);
      setFaqButton(false);
      setTeamButton(false);
      return;
    } else if (name === "faq") {
      setPitchButton(false);
      setFaqButton(true);
      setTeamButton(false);
      return;
    }
    if (name === "team") {
      setPitchButton(false);
      setFaqButton(false);
      setTeamButton(true);
      return;
    }
  };
  return (
    // <Screen>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={16} />
          &nbsp;Back
        </Text>
        <View style={styles.box1}>
          <Image
            style={styles.box1Logo}
            source={require("../../../assets/gradientWithBG.png")}
          />
          <Text style={styles.box1Heading}>Startup Name</Text>
        </View>
        <Text style={styles.description}>
          Zapp Invest is an investing platform where anyone can invest in
          startup with just INR 5000
        </Text>
        <View style={styles.tagContainer}>
          <Tag title="Fintech" />
          <Tag title="B2B" />
          <Tag title="Investing Platform" />
          <Tag title="Investing Platform" />
          <Tag title="Investing Platform" />
        </View>

        <View style = {{marginTop: 20}}>
          <WebView
            javaScriptEnabled={true}
            style={{ width: "100%", height: 250, backgroundColor: "black", borderWidth: 10, }}
            // source={{html: `<iframe width="100%" height="100%" src=${link} title=${movieName}></iframe>`,}}/>
            source={{ html: `<html><iframe width="100%" height="100%" src="https://www.youtube.com/embed/T3fEF7xg0Vo" frameborder="0" gyroscope; picture-in-picture></iframe></html>` }}
          />
        </View>

        <View style={styles.USPSection}>
          <Text style={styles.USPHeading}>USP</Text>
          <View style={styles.USPCardContainer}>
            <View style={{ width: "49%" }}>
              <USPCard />
            </View>
            <View style={{ width: "49%" }}>
              <USPCard />
            </View>
            <View style={{ width: "49%" }}>
              <USPCard />
            </View>
            <View style={{ width: "49%" }}>
              <USPCard />
            </View>
          </View>
        </View>

        <View style={styles.documentSection}>
          <Text style={styles.documentHeading}>Documents</Text>

          <View>
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          {[0, 1, 2].map((key, val) => {
            return (
              <View style={{ marginTop: 10 }} key={key}>
                <HighLightCard />
              </View>
            );
          })}
        </View>

        <View style={styles.tabSwitchSection}>
          <View>
            <ScrollView horizontal style={styles.buttonContainer}>
              <Text
                style={[
                  styles.tabSwitchHeading,
                  pitchButton && styles.tabSwitchHeadingSelected,
                ]}
                onPress={() => handleTabSwitchButton("pitch")}
              >
                Pitch
              </Text>
              <Text
                style={[
                  styles.tabSwitchHeading,
                  faqButton && styles.tabSwitchHeadingSelected,
                ]}
                onPress={() => handleTabSwitchButton("faq")}
              >
                FAQs
              </Text>
              <Text
                style={[
                  styles.tabSwitchHeading,
                  teamButton && styles.tabSwitchHeadingSelected,
                ]}
                onPress={() => handleTabSwitchButton("team")}
              >
                Team
              </Text>
            </ScrollView>
          </View>

          <View>
            {/* {pitchButton&& } */}
            {teamButton && <Team />}
            {faqButton && <Faq />}
          </View>
        </View>
      </View>
    </ScrollView>
    // </Screen>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    // backgroundColor: colors.white,

  },
  backButton: {
    color: colors.primary,
    fontSize: 15,
  },
  box1: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box1Logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  box1Heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },

  description: {
    fontSize: 16,
    marginTop: 10,
  },

  tagContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ytVideo: {
    marginTop: 10,
    borderRadius: 10,
  },

  USPSection: {
    marginTop: 20,
  },
  USPHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  USPCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  documentSection: {
    marginTop: 20,
  },
  documentHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },

  tabSwitchSection: {
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: colors.lightGrey,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  tabSwitchHeading: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 39,
    fontSize: 18,
    fontWeight: "500",
  },
  tabSwitchHeadingSelected: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});

import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StartupCard from '../../Cards/StartupCard'
import CardCarousel from "./CardCarousel";
import Data from "../Deals/StartUpCardData";

const HomeScreen = ({navigation}) => {
     const handlePress = () => {
       navigation.navigate("details");
       console.log("Clicked");
     };
  return (
    // <Screen>
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section1}>
          <Text
            style={{
              color: colors.white,
              fontSize: 30,
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            ZappInvest
          </Text>
          <Text>Place where best startup raise for their community</Text>
        </View>

        <View style={styles.section3}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Startups</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: colors.primary,
              }}
            >
              View all <MaterialCommunityIcons name="arrow-right" size={16} />
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <StartupCard data={Data[0]} handlePress={handlePress} />
          </View>
          <View style={{ marginTop: 10 }}>
            <StartupCard data={Data[0]} handlePress={handlePress} />
          </View>
        </View>

        <View>
          <CardCarousel />
        </View>

        <View style={styles.section2}>
          <View style={styles.section2Box}>
            <Text style={styles.section2Heading}>
              If you had invested ₹5000 in the initial round then your worth
              today could be
            </Text>
            <View style={styles.section2CardsContainer}>
              <View style={styles.section2Card}>
                <Image
                  style={styles.section2CardImage}
                  source={{
                    uri: "https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png",
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 3 }}>
                  OLA
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 3 }}>
                  ₹1900000
                </Text>
              </View>
              <View style={styles.section2Card}>
                <Image
                  style={styles.section2CardImage}
                  source={{
                    uri: "https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png",
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 3 }}>
                  OLA
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 3 }}>
                  ₹1900000
                </Text>
              </View>
              <View style={styles.section2Card}>
                <Image
                  style={styles.section2CardImage}
                  source={{
                    uri: "https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png",
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 3 }}>
                  OLA
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 3 }}>
                  ₹1900000
                </Text>
              </View>
              <View style={styles.section2Card}>
                <Image
                  style={styles.section2CardImage}
                  source={{
                    uri: "https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png",
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 3 }}>
                  OLA
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 3 }}>
                  ₹1900000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    //</Screen>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
  },


  // section - 1
  section1:{
    height: 400,
    // borderRadius: 10,
    backgroundColor: colors.darkBlue,
    // marginHorizontal : 10,

  },


  // section 2
  section2:{
    marginTop : 20,
    height: 400,
    // borderRadius: 10,
    backgroundColor: colors.darkBlue,
    // marginHorizontal : 10,
  },
  section2Box:{
    marginHorizontal : 10,
  },
  section2Heading:{
    marginTop : 20,
    color : colors.white,
    fontSize : 18,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  section2CardsContainer:{
    marginVertical : 10,
    flexDirection : 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  section2Card:{
    marginTop : 10,
    backgroundColor :colors.white,
    height: 140,
    width: '45%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  section2CardImage:{
    resizeMode: 'contain',
    width: '90%',
    height: 50
    
  },

  section3:{
    marginHorizontal : 10,
    marginTop : 20,
  },
})
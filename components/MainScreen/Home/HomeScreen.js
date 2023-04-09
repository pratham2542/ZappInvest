import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StartupCard from '../../Cards/StartupCard'
import CardCarousel from "../../Cards/CardCarousel"
import Data from "../Deals/StartUpCardData";
import LearnCard from '../../Cards/LearnCard'
import Screen from '../Screen'
import AppButton from '../../utils/AppButton'
const HomeScreen = () => {
  return (
    
      <View style = {styles.container}>
        <ScrollView>
          <View style = {styles.section1}>
              <View style = {styles.section1Container}>
                <Text style = {{color : colors.white, fontSize : 30, fontWeight: '900', textAlign: 'center'}}>ZappInvest</Text>
                <Text style = {{color : colors.white, fontSize : 16, fontWeight: '500', textAlign: 'center'}}>Place where best startup raise for their community</Text>
                <View style = {{flexDirection : 'row', justifyContent: 'space-evenly'}}>
                  <AppButton width='45%' title = "Register startup"/>
                  <AppButton width='45%' title = "Become investor"/>
                </View>

                <View style = {{width: '90%', height: 70, backgroundColor : colors.white, alignSelf: 'center', borderRadius: 10,}}> 

                </View>
              </View>
          </View>

          <View style = {{marginTop : 20, }}>
            <LearnCard/>
          </View>


          <View style = {styles.section3}>
            <View style = {{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Startups</Text>
              <Text style = {{fontSize: 14, fontWeight: 'bold', color : colors.primary}}>View all <MaterialCommunityIcons name = 'arrow-right' size = {16}/></Text>
            </View>
            <View style = {{marginTop : 10,}}><StartupCard data={Data[4 - 1]} /></View>
            <View style = {{marginTop : 10,}}><StartupCard data={Data[4 - 2]} /></View>
          </View>

          <View>
            <CardCarousel/>
          </View>

          <View style = {styles.section2}>
            <View style = {styles.section2Box}>
              <Text style = {styles.section2Heading}>If you had invested ₹5000 in the initial round then your worth today could be</Text>
              <View style = {styles.section2CardsContainer}>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png'}}/>
                  <Text style = {styles.section2CardHeading}>OLA</Text>
                  <Text style = {styles.section2CardHeading2}>₹1900000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png'}}/>
                  <Text style = {styles.section2CardHeading}>OLA</Text>
                  <Text style = {styles.section2CardHeading2}>₹1900000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png'}}/>
                  <Text style = {styles.section2CardHeading}>OLA</Text>
                  <Text style = {styles.section2CardHeading2}>₹1900000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://www.nicepng.com/png/detail/919-9199193_logo-ola-cabs-logo.png'}}/>
                  <Text style = {styles.section2CardHeading}>OLA</Text>
                  <Text style = {styles.section2CardHeading2}>₹1900000</Text>
                </View>
                
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
  },


  // section - 1
  section1:{
    height: 300,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
    marginHorizontal : 10,

  },
  section1Container:{
    // marginHorizontal : 10,
  },


  // section 2
  section2:{
    marginTop : 20,
    height: 300,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
    marginHorizontal : 10,
  },
  section2Box:{
    // marginHorizontal : 10,
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
    height: 90,
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  section2CardImage:{
    resizeMode: 'contain',
    width: '80%',
    height: 30
    
  },
  section2CardHeading:{
    fontSize : 16, 
    fontWeight : '900', 
    marginTop : 3
  },
  section2CardHeading2:{
    fontSize : 18, 
    fontWeight : '400', 
    marginTop : 3
  },

  section3:{
    marginHorizontal : 10,
    marginTop : 20,
  },
})
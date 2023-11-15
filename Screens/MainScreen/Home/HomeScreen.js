import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import StartupCard from '../../../components/OtherComponents/Cards/StartupCard'
import CardCarousel from "../../../components/OtherComponents/Cards/CardCarousel"
import Data from "../Deals/StartUpCardData";
import LearnCard from '../../../components/OtherComponents/Cards/LearnCard'
import Screen from '../../../components/utils/Screen'
import AppButton from '../../../components/utils/AppButton'
import { Octicons } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {
  return (
      // <Screen>
      <View style = {styles.container}>
        <ScrollView>
          <View style = {styles.section1}>
              <View style = {styles.section1Container1}>
                <Text style = {{color : colors.white, fontSize : 36, fontWeight: '900', textAlign: 'center'}}>ZappInvest</Text>
                <Text style = {{color : colors.white, fontSize : 14, fontWeight: '500', textAlign: 'center'}}>Place where best startup raise {"\n"}for their community</Text>
                <View style = {{flexDirection : 'row', justifyContent: 'space-evenly',marginVertical:15}}>
                  <AppButton width='45%' title = "Register startup" onPress= {()=>navigation.navigate("startupForm")} />
                  <AppButton width='45%' title = "Explore deals" onPress= {()=>navigation.navigate("Deals")}/>
                </View>
              </View>
              <View style = {styles.section1Container2}>
                <View style = {styles.section1Container2Box}>
                  <MaterialIcons name="verified" size={18} color="green" />
                  <Text style = {{color : colors.light,fontSize: 16, marginLeft: 20,borderBottomWidth: 0.5,borderBottomColor: colors.light,flex: 1,}}>Create profile</Text>
                </View>
    
                <View style = {styles.section1Container2Box}>
                  <MaterialIcons name="cancel" size={18} color="red" />
                  <Text style = {{color : colors.light,fontSize: 16, marginLeft: 20,borderBottomWidth: 0.5,borderBottomColor: colors.light,flex: 1,}}>Complete KYC</Text>
                </View>
                <View style = {styles.section1Container2Box}>
                  <MaterialIcons name="cancel" size={18} color="red" />
                  <Text style = {{color : colors.light,fontSize: 16, marginLeft: 20,borderBottomWidth: 0.5,borderBottomColor: colors.light,flex: 1,}}>Add Bank details</Text>
                </View>
              </View>
          </View>

          <View style = {{marginTop : 20, }}>
            <LearnCard title = {'Learn more about startup investing'} description='Understand in 60sec' onPress = {()=>console.log('learn card clicked')}/>
          </View>


          <View style = {styles.section3}>
            <View style = {{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Startups</Text>
              <Text style = {{fontSize: 14, fontWeight: 'bold', color : colors.primary}}>View all <MaterialCommunityIcons name = 'arrow-right' size = {16}/></Text>
            </View>
            <View style = {{marginTop : 10,}}><StartupCard data={Data[4 - 1]} /></View>
            <View style = {{marginTop : 10,}}><StartupCard data={Data[4 - 2]} /></View>
          </View>

          {/* <View>
            <CardCarousel/>
          </View> */}

          <View style = {styles.section2}>
            <View style = {styles.section2Box}>
              <Text style = {styles.section2Heading}>If you had invested ₹5000 in the initial round then your worth today could be</Text>
              <View style = {styles.section2CardsContainer}>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://res.cloudinary.com/dtqgtredx/image/upload/v1681451340/startups/Ola_Cabs_logo.svg.74ab207fca95523c7d97_czi1u0.png'}}/>
                  <Text style = {styles.section2CardHeading}>OLA</Text>
                  <Text style = {styles.section2CardHeading2}>₹800000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://res.cloudinary.com/dtqgtredx/image/upload/v1681451309/startups/ZomatoLogo.ef807f45b5462e5eaeda_ojcbzh.png'}}/>
                  <Text style = {styles.section2CardHeading}>Zomato</Text>
                  <Text style = {styles.section2CardHeading2}>₹1900000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://res.cloudinary.com/dtqgtredx/image/upload/v1681451307/startups/download_lttufy.png'}}/>
                  <Text style = {styles.section2CardHeading}>BharatPe</Text>
                  <Text style = {styles.section2CardHeading2}>₹450000</Text>
                </View>
                <View style = {styles.section2Card}>
                  <Image style = {styles.section2CardImage} source = {{uri: 'https://res.cloudinary.com/dtqgtredx/image/upload/v1681451297/startups/download_1_g8naqz.png'}}/>
                  <Text style = {styles.section2CardHeading}>Byju</Text>
                  <Text style = {styles.section2CardHeading2}>₹3000000</Text>
                </View>
                
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      // </Screen>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
  },


  // section - 1
  section1:{
    // height: 300,
    borderRadius: 10,
    marginHorizontal : 10,
    elevation: 2

  },
  section1Container1:{
    paddingTop : 20,
    paddingBottom : 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.darkBlue,

  },
  section1Container2:{
    paddingTop : 20,
    paddingBottom : 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.white,

  },
  section1Container2Box:{
    padding: 10,
    flexDirection: 'row',
    

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
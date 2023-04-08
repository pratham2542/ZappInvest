import React from 'react';
import { View, Text, Image, ScrollView ,TouchableHighlight } from 'react-native';
import ProfilePageBox from '../../utils/ProfilePageBox';
import Screen from '../Screen';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../../config/colors';


const ProfileScreen = ({navigation}) => {
   
  return (
    <Screen>
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.profilePhoto}>
                <Image style={styles.profile}
                source={{uri: 'https://media.licdn.com/dms/image/C5603AQHx5U67bdoirw/profile-displayphoto-shrink_400_400/0/1651819114823?e=1685577600&v=beta&t=N39o57kpuau3zItcUBh8mZLjpqcl3OU2lfObN5bXl0Q'}}
                />
               
            <View style={styles.editbutton}>
          <TouchableHighlight style={styles.roundshape}>
          <AntDesign name="edit" size={24} color="white" />
          </TouchableHighlight>
      </View>
      </View>
                <Text style={styles.nameText}>Naman Goyal</Text>
            </View>

        <View style={styles.section}>
            <Text style={styles.statLabel}>9509827590</Text>
        </View>
        <ProfilePageBox name="account-edit" heading="Edit Details" size={50} iconColor="black" route="editdetail" />
        <ProfilePageBox name="bank" heading="Bank Details" size={50} iconColor="black" route="bankdetail" />
        <ProfilePageBox name="contacts" heading="Contact Us" size={50} iconColor="black" route="contact" />
        <ProfilePageBox name="security" heading="Privacy Policy" size={50} iconColor="black" route="privacy" />
        <ProfilePageBox name="notebook-check-outline" heading="Terms And Conditions" size={50} iconColor="black" route="termsandconditions"/>
        <ProfilePageBox name="logout" heading="logout" size={50} iconColor="black" route="logout" />
        </ScrollView>
    </Screen>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 180,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius : 70,},
  profilePhoto: {
    width: 100,
    height: 100,
    borderStyle: 'dashed',
    borderRadius : 70,
    borderColor: 'blue',
    borderWidth:3,
    alignItems: 'center',
    
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  section: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    marginVertical:5,
    marginBottom:40,
    paddingHorizontal:10,
  },
  statCount: {
    color: '#999',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
    marginLeft:4
  },
  button: {
    backgroundColor: '#9400D3',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,

  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  spaced:{
    marginTop:30,
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editbutton: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  item: {
    alignSelf: "center",
    color:"white"
  },
  roundshape:  {
    backgroundColor: colors.black,
    height: 36, 
    width: 36,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 18   // it will be height/2
  }
  
};

export default ProfileScreen;

                   
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet ,TouchableOpacity,Text} from 'react-native';
import InvestorProfilePage from '../../components/utils/InvestorProfilePage';
import InterestedSectorsDropdown from '../../components/utils/InvestorSectorDropdown';

const InvestorProfileScreen = () => {
    const initialProfileData = {
        pic: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        bio: '',
        dob: '',
        country: '',
        pincode: '',
        city: '',
        state: '',
        line: '',
        linkedin: '',
        website: '',
        twitter: '',
        instagram: '',
        selectedSectors: [],
      };
  const [profileData, setProfileData] = useState({
    pic: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    bio: '',
    dob: '',
    country: '',
    pincode: '',
    city: '',
    state: '',
    line: '',
    linkedin: '',
    website: '',
    twitter: '',
    instagram: '',
    selectedSectors: [], 
  });

  const handleSelectSectors = (selectedSectors) => {
    setProfileData({ ...profileData, selectedSectors }); 
  };

  const handleSaveProfile = () => {
    // Handle saving the profile data
    console.log('Profile Data:', profileData);
  };
  const handleReset = () => {
    setProfileData(initialProfileData);
  };

  return (
    <ScrollView>
      <View style={styles.Investorscreen}>
        {/* First Box */}
        <InvestorProfilePage
          boxTitle="General Details"
          fields={[
            { key: 'username', label: 'Username', placeholder: 'Enter username' },
            { key: 'email', label: 'Email', placeholder: 'Enter email' },
            { key: 'firstName', label: 'First Name', placeholder: 'Enter first name' },
            { key: 'lastName', label: 'Last Name', placeholder: 'Enter last name' },
          ]}
          setProfileData={setProfileData}
          profileData={profileData}
        />

        {/* Second Box */}
        <InvestorProfilePage
          boxTitle="Personal Details"
          fields={[
            { key: 'mobileNo', label: 'Mobile Number', placeholder: 'Enter mobile number', keyboardType: 'numeric' },
            { key: 'dob', label: 'Date of Birth', placeholder: 'Select date of birth', isDate: true },
            { key: 'bio', label: 'Enter Bio', placeholder: 'Tell us about yourself' },
            { key: 'line', label: 'Street', placeholder: 'Enter street' },
            { key: 'city', label: 'City', placeholder: 'Enter city' },
            { key: 'state', label: 'State', placeholder: 'Enter state' },
            { key: 'pincode', label: 'Pincode', placeholder: 'Enter pincode', keyboardType: 'numeric' },
            { key: 'country', label: 'Country Name', placeholder: 'Enter country' },
          ]}
          setProfileData={setProfileData}
          profileData={profileData}
        />

        {/* Third Box */}
        <InvestorProfilePage
          boxTitle="Social Media"
          fields={[
            { key: 'linkedin', label: 'LinkedIn', placeholder: 'Enter LinkedIn URL' },
            { key: 'twitter', label: 'Twitter', placeholder: 'Enter Twitter URL' },
            { key: 'instagram', label: 'Instagram', placeholder: 'Enter Instagram URL' },
            { key: 'website', label: 'Website', placeholder: 'Enter website URL' },
          ]}
          setProfileData={setProfileData}
          profileData={profileData}
        />

        {/* Fourth Box */}
        {/* Interested Sectors Dropdown */}
        <InterestedSectorsDropdown
          selectedSectors={profileData.selectedSectors} // Corrected name
          onSelectSector={handleSelectSectors}
        />
         {/* Save Changes and Reset Buttons */}
         <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Investorscreen: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    flex: 1, // Take equal space in the row
    marginHorizontal: 5, // Adjust margin as needed
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default InvestorProfileScreen;

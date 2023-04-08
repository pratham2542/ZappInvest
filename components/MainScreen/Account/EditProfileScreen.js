import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Screen from '../Screen';
import colors from '../../../config/colors';
import AppButton from '../../utils/AppButton';


const EditProfileScreen = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [linkedInProfile, setLinkedInProfile] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [editable, setEditable] = useState(false);
  
    const handleEdit = () => {
      setEditable(true);
    };
  
    const handleSubmit = () => {
      // Handle form submission
      setEditable(false);
    };
  
    return (
    <Screen style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>Edit Details</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Name</Text>
          <TextInput
            style={[styles.input, !editable && styles.disabledInput]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            editable={editable}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Email</Text>
          <TextInput
            style={[styles.input, !editable && styles.disabledInput]}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            editable={editable}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Phone Number</Text>
          <TextInput
            style={[styles.input, !editable && styles.disabledInput]}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            editable={editable}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>LinkedIn Profile</Text>
          <TextInput
            style={[styles.input, !editable && styles.disabledInput]}
            placeholder="LinkedIn Profile"
            value={linkedInProfile}
            onChangeText={setLinkedInProfile}
            editable={editable}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Full Address</Text>
          <TextInput
            style={[styles.input, !editable && styles.disabledInput]}
            placeholder="Full Address"
            value={fullAddress}
            onChangeText={setFullAddress}
            editable={editable}
          />
        </View>
        {editable ? (
          <AppButton 
            title="Save"
            onPress={handleSubmit}
          />
        ) : (
          <AppButton
            title="Edit"
            onPress={handleEdit}
          />
        )}
      </ScrollView>
      </Screen>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      marginTop:70
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      alignSelf: 'center' , 
      textAlign:"center",
      flex:1 
    },
    fieldContainer: {
      marginBottom: 10,
    },
    fieldName: {
      fontSize: 10,
      marginBottom: 5,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 10,
    },
    disabledInput: {
      backgroundColor: colors.lightGrey
      ,
    },
  })

export default EditProfileScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Screen from '../../../components/utils/Screen';
import colors from '../../../config/colors';
import AppButton from '../../../components/utils/AppButton';
import axios from 'axios';
import { SERVER_URL } from '../../../config/env'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from '../../../routes/routes';


const EditProfileScreen = ({navigation}) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    console.log('Bank detail screen activate');
    axios.get(routes.userRoute)
      .then((res) => {
        if (res.data) {
          const { firstName, lastName, email, address, mobile } = res.data;
          setMobile(mobile);
          setAddress(address);
          setEmail(email);
          setName(`${firstName} ${lastName}`)
        }
      }).catch(error => {
        console.log(error)
      })

  }, [])
  const handleEdit = () => {
    setEditable(true);
  };

  const handleSubmit = () => {
    // Handle form submission
    setEditable(false);
    axios.put(`${SERVER_URL}/user/editProfile`,
      {
        mobile, address
      }).then((res) => {
        console.log(res);
      }).catch(error => {
        console.log(error)
      })
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center" }}>
      <Text style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={16} />
          &nbsp;Back
        </Text>
      <ScrollView style={{ marginTop: 150 }}>
        <View style={{ margin: 20, backgroundColor: "white" }}>
          <Text style={styles.title}>Edit Details</Text>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Name</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              editable={false}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Email</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              editable={false}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Phone Number</Text>
            <TextInput
              style={[styles.input, !editable && styles.disabledInput]}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
              editable={editable}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Full Address</Text>
            <TextInput
              style={[styles.input, !editable && styles.disabledInput]}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
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
        </View>

      </ScrollView>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 70
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: "center",
    flex: 1
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
  backButton: {
    color: colors.primary,
    fontSize: 15,
    position: 'absolute',
    top: 30,
    left : 15,
  },
})

export default EditProfileScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import colors from '../../../config/colors';
import AppButton from '../../utils/AppButton';


const BankDetailsScreen = () => {
  const [name, setName] = useState('John Doe');
  const [accountNumber, setAccountNumber] = useState('1234567890123456');
  const [ifscCode, setIfscCode] = useState('ABCD0123456');
  const [bankName, setBankName] = useState('My Bank');
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSubmit = () => {
    // Handle form submission
    setEditable(false);
  };

  return (
    <View style={{flex:1,backgroundColor:"#ffffff"}}>
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Bank Details</Text>
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
        <Text style={styles.fieldName}>Account Number</Text>
        <TextInput
          style={[styles.input, !editable && styles.disabledInput]}
          placeholder="Account Number"
          keyboardType="numeric"
          value={accountNumber}
          onChangeText={setAccountNumber}
          editable={editable}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldName}>IFSC Code</Text>
        <TextInput
          style={[styles.input, !editable && styles.disabledInput]}
          placeholder="IFSC Code"
          value={ifscCode}
          onChangeText={setIfscCode}
          editable={editable}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldName}>Bank Name</Text>
        <TextInput
          style={[styles.input, !editable && styles.disabledInput]}
          placeholder="Bank Name"
          value={bankName}
          onChangeText={setBankName}
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

    </View>
    
    
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      marginTop:200,
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


export default BankDetailsScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import colors from '../../../config/colors';
import AppButton from '../../../components/utils/AppButton';
import axios from 'axios';
import { SERVER_URL } from '../../../config/env';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from '../../../routes/routes';


const BankDetailsScreen = ({ navigation }) => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [IFSCcode, setIFSCcode] = useState('');
  const [bankName, setBankName] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    console.log('Bank detail screen activate');
    axios.get(routes.userRoute)
      .then((res) => {
        if (res.data) {
          const { bankName, accountNo, beneficiaryName, IFSCcode } = res.data.bankDetails;
          setAccountNo(accountNo);
          setBankName(bankName);
          setBeneficiaryName(beneficiaryName);
          setIFSCcode(IFSCcode);
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

    axios.put(`${SERVER_URL}/user/editBankDetails`,
      {
        bankName, accountNo, beneficiaryName, IFSCcode
      }).then((res) => {
        console.log(res);
      })
  };

  return (
    <>

      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Text style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={16} />
          &nbsp;Back
        </Text>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Bank Details</Text>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Beneficiary Name</Text>
            <TextInput
              style={[styles.input, !editable && styles.disabledInput]}
              placeholder="beneficiaryName"
              value={beneficiaryName}
              onChangeText={setBeneficiaryName}
              editable={editable}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Account Number</Text>
            <TextInput
              style={[styles.input, !editable && styles.disabledInput]}
              placeholder="Account Number"
              value={accountNo}
              onChangeText={setAccountNo}
              editable={editable}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>IFSC Code</Text>
            <TextInput
              style={[styles.input, !editable && styles.disabledInput]}
              placeholder="IFSC Code"
              value={IFSCcode}
              onChangeText={setIFSCcode}
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
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 200,
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
    backgroundColor: colors.lightGrey,
  },
  backButton: {
    color: colors.primary,
    fontSize: 15,
    position: 'absolute',
    top: 20,
    left: 15,
  },
})


export default BankDetailsScreen;

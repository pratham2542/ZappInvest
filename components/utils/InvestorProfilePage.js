import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import DateField from 'react-native-datefield';

const InvestorProfilePage = ({ boxTitle, fields, setProfileData, profileData }) => {
  const renderFields = () => {
    return fields.map((field) => (
      <View style={styles.fieldContainer} key={field.key}>
        <Text>{field.label}</Text>
        {field.isDate ? (
          <DateField
            styleInput={styles.inputBorder}
            labelDate={field.labelDate}
            labelMonth={field.labelMonth}
            labelYear={field.labelYear}
            defaultValue={profileData[field.key] ? new Date(profileData[field.key]) : new Date()}
            onSubmit={(value) => setProfileData({ ...profileData, [field.key]: value.toISOString().split('T')[0] })}
          />
        ) : (
          <TextInput
            style={styles.input}
            value={profileData[field.key]}
            onChangeText={(text) => setProfileData({ ...profileData, [field.key]: text })}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
          />
        )}
      </View>
    ));
  };

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.boxTitle}>{boxTitle}</Text>
      {renderFields()}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 8,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default InvestorProfilePage;

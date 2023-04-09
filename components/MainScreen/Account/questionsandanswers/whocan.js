import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Whocan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Who can invest?</Text>
      <Text style={styles.subheading}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.content}>  Zapp is an open platform where anyone can invest in the startups. But there is an age barrier. Any one who have an age of 18 years or more and have -
1.identity proof like, aadhar card / passport / driving license and
2.a personal bank account, and
3.pan card
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Whocan;

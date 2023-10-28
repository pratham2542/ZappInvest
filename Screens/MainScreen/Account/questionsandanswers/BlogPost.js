import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogPost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why choose us over others?</Text>
      <Text style={styles.content}>
      We are creating a platform where everyone will get equal chance of investing in startups. Earlier only wealthier people can invest in startups but our vision is to makes investing in startups feasible for all the people so that they can also grow their wealth over the time period.
      </Text>
      <Text style={styles.subheading}>Lorem ipsum dolor sit amet</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center'
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

export default BlogPost;

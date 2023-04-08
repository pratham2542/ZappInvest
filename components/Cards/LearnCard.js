import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const LearnCard = ({title = "this is title", description = "this is description", btnname = "Learn", backgroundColor =  colors.lightGrey}) => {
  return (
    <View style={[styles.cardContainer,{backgroundColor: backgroundColor}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{btnname}</Text>
        </TouchableOpacity>
      </View>
      <View></View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/edit.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignContent:'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding:6
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
    color:colors.light 
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent:'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode:'contain'
  },
});
export default LearnCard;
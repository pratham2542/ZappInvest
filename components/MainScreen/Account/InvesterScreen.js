import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback,Image } from 'react-native';
import Screen from '../Screen';
import { useNavigation } from '@react-navigation/native';

const LineSeparator = () => {
  return <View style={{ borderBottomColor: '#f7f7f7', borderBottomWidth: 1, width: '100%' }} />;
};

const InvestorScreen = () => {
    const navigation = useNavigation();
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  navigation.navigate('investordetails', { question });
  };

  return (
    <Screen style={{ flex: 1 }}>
      <Image
        style={{width: '100%',
            height: 200,
            }}
        source={require('../../../assets/investorimage.jpg')}
      />
      <Text style={{ textAlign: 'center',fontSize: 24, fontWeight: 'bold' ,marginTop:5}}>For Investors</Text>
      <TouchableWithoutFeedback onPress={() => handleQuestionClick(1)}>
        <View
          style={{
            padding: 20,
            marginBottom: 2,
          }}>
          <Text style={{ color: selectedQuestion === 1 ? '#55B8FD' : 'black' }}>Why invest in early startups?</Text>
        </View>
      </TouchableWithoutFeedback>
      <LineSeparator />
      <TouchableWithoutFeedback onPress={() => handleQuestionClick(2)}>
        <View
          style={{
            padding: 20,
            marginBottom: 10,
          }}>
          <Text style={{ color: selectedQuestion === 2 ? '#55B8FD' : 'black' }}>Risk in investment</Text>
        </View>
      </TouchableWithoutFeedback>
      <LineSeparator />
      <TouchableWithoutFeedback onPress={() => handleQuestionClick(3)}>
        <View
          style={{
            padding: 20,
            marginBottom: 10,
          }}>
          <Text style={{ color: selectedQuestion === 3 ? '#55B8FD' : 'black' }}>Why choose Investingga over other?</Text>
        </View>
      </TouchableWithoutFeedback>
      <LineSeparator />
      <TouchableWithoutFeedback onPress={() => handleQuestionClick(4)}>
        <View
          style={{
            padding: 20,
            marginBottom: 10,
          }}>
          <Text style={{ color: selectedQuestion === 4 ? '#55B8FD' : 'black' }}>Who can invest?</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default InvestorScreen;

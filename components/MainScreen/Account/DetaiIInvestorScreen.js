import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


const DetailsInvestorScreen = () => {
  const route = useRoute();
  const item = route.params.question;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item}</Text>
    </View>
  );
};

export default DetailsInvestorScreen;

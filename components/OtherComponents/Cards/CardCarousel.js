import React from 'react';
import { View } from 'react-native';
import CarouselCardItem from './CarouselCardItem';

const CardCarousel = () => {
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View>
      <CarouselCardItem data={data} />
    </View>
  );
};

export default CardCarousel;

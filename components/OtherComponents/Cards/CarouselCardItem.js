import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const CarouselCardItem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(index);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollView}
      >
        {data.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <Text
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: 200,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  slide: {
    width: Dimensions.get('window').width,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 10,

  },
  paginationDot: {
    color: '#888',
    margin: 3,
    fontSize: 15,
  },
  paginationDotActive: {
    color: '#333',
  },
});

export default CarouselCardItem;

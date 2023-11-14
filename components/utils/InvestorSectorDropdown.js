import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const InterestedSectorsDropdown = ({ selectedSectors, onSelectSector }) => {
  const sectors = [
    'B2B',
    'B2C',
    'AgriTech',
    'Edtech',
    'Fintech',
    'Artificial Intelligence',
    'Augmented Reality',
    'Virtual Reality',
    'Healthcare',
    'Big Data',
    'D2C',
    'Real Estate',
    'Supply Chain',
    'Logistic',
    'Delivery Service',
    'Ecommerce',
    'Space',
    'Drone Service',
    'Defence',
    'Web3',
    'NFT',
    'Blockchain',
    'Cyber Security',
    'Environment Tech',
    'Climate',
    'Renewable Energy',
  ];

  const handleSelect = (option) => {
    const updatedSectors = selectedSectors.includes(option)
      ? selectedSectors.filter((sector) => sector !== option)
      : [...selectedSectors, option];

    onSelectSector(updatedSectors);
  };

  return (
    <View>
      <Text>Interested Sectors</Text>
      <ScrollView horizontal style={styles.selectedSectorsContainer}>
        {sectors.map((sector) => (
          <TouchableOpacity
            key={sector}
            style={[styles.sectorButton, { backgroundColor: selectedSectors.includes(sector) ? 'green' : 'gray' }]}
            onPress={() => handleSelect(sector)}
          >
            <Text style={styles.buttonText}>{sector}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedSectorsContainer: {
    marginTop: 10,
  },
  sectorButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default InterestedSectorsDropdown;

import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../../config/colors';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';

function ProfilePageBox({name,heading,size,iconColor,route,onPress}) {
return (
  <>
    <Pressable onPress={onPress}>
    <View style={styles.container}>
    <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <Text style={styles.name}>{heading}</Text>
      </View>
    </View>
    </View>

  </Pressable>
    <View style={styles.separator} />
    </>
  
 );
}
const styles = StyleSheet.create({
    root: {
      backgroundColor: '#ffffff',
      marginTop: 10,
    },
    container: {
      paddingLeft: 19,
      paddingRight: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    contentHeader: {
    marginBottom:10,
    marginLeft:20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      height: 1,
      backgroundColor: colors.lightGrey,
    },
    image: {
      width: 45,
      height: 45,
      borderRadius: 22,
      marginLeft: 20,
    },
    name: {
      fontSize: 16,
      

    },
  })

export default ProfilePageBox;
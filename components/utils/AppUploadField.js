import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';

const AppUploadField = ({onPress ,title,width="100%",...otherProps }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,{width:width}]} >
          <Text>{title}</Text>
        </TouchableOpacity>
      );
}

export default AppUploadField

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFF0F4",
        borderRadius: 5,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        borderWidth:1,
        borderStyle: 'dashed',
      },
      
})
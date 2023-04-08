import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const Tag = ({title}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title|| "Naman"}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.lightGrey,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 50,
        marginRight : 5,
        marginTop : 5,

    },
    text:{
        fontSize : 14,
        fontWeight: '500'

    },

})
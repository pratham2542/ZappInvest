import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BorderBox = ({children}) => {
  return (
    <View style = {styles.section}>
        <View style={styles.container}>
        {children}

        </View>
    </View>
  )
}

export default BorderBox

const styles = StyleSheet.create({
    section:{
        borderRadius:10,
        elevation:5,
        width:'100%',
        marginVertical:15,
        // paddingHorizontal:10,
        // paddingVertical:15
    },
    container:{
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:10,
    }
})
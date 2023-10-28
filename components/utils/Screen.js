import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

export default function Screen(props) {
  return (
    <>
        <SafeAreaView style = {[styles.screenContainer, props.style]}>
            {props.children}
        </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
    screenContainer: {
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,

    },
})
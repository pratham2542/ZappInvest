import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useToast } from "react-native-toast-notifications";

const ToastMessage = ({message, type}) => {
    const toast = useToast();
  return (
    toast.show(message, {
        // type: "normal | success | warning | danger | custom",
        type: type,
        placement: "bottom",
        duration: 3000,
        offset: 30,
        animationType: "slide-in",
      })
  )
}

export default ToastMessage

const styles = StyleSheet.create({})
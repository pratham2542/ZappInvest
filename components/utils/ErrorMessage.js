import { View, Text } from 'react-native'
import React from 'react'

export default function ErrorMessage({errorMessage}) {
  return (
    <Text style = {{color : 'red'}}>
        {errorMessage}
    </Text>
  )
}
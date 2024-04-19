/* eslint-disable react/prop-types */
import React from 'react'
import { Platform, Text, View } from 'react-native'

export default function SystemInfo () {
  return (
        <View >
            <Text>Platform: {Platform.OS}.</Text>
            <Text>{Platform.Version ? `Version: ${Platform.Version}` : null}</Text>
            {/* 
            Checking ___DEV___ in snack has no sense and doesn't work
            <Text>Mode: {__DEV__ ? 'Development' : 'Production'}</Text>
            */}
            <Text> Mode: Development</Text>
        </View>
  )
}

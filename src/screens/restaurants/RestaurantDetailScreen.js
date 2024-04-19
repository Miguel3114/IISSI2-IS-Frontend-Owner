/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function RestaurantDetailScreen ({ route }) {
  const { id } = route.params
  return (
        <View style={styles.container}>
            <Text>Restaurant details. Id: {id}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
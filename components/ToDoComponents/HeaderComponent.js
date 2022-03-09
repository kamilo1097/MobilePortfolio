import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderComponent() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Moje TODO</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
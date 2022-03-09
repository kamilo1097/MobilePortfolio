import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { useState } from 'react';

export default function TextComp() {
    const [name, setName] = useState("Kamil");
    const [age, setAge] = useState("30");
    return (
        <View>
          <Text>Enter name test:</Text>
        <TextInput style={styles.input}
        multiline
        placeholder='e.g Joghn jakiś'
        onChangeText={(val) => setName(val)}/>
  
        <Text>Enter Age test:</Text>
        <TextInput style={styles.input}
        keyboardType='numeric'
        placeholder='e.g 99'
        onChangeText={(val) => setAge(val)}/>
        <Text>Imie: {name}, wiek: {age}</Text>
        </View>
      )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor: 'pink',
      padding: 20,
    },
    boldText:{
      fontWeight: "bold"
    },
    body:{
      backgroundColor: 'yellow',
      padding: 20,
    },
    buttonContainer:{
      marginTop: 20,
    },
    input:{
      borderWidth: 1,
      borderColor: "#777",
      padding: 8,
      margin: 10,
      width: 200,
    }
  });

  
  
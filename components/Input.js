import React from 'react'
import {  TextInput, StyleSheet } from 'react-native'

export default function Input(props){

    console.log("Input");

    return(
        <TextInput
          style={styles.input}
          placeholder= {props.place}
          placeholderTextColor={'black'}
        />
    )
}

const styles = StyleSheet.create({
  
    input: {
      backgroundColor: '#eeeeee',
      padding: 20,
      width: 250,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20
    }
  });




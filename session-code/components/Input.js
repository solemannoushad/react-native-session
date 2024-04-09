import React from 'react'
import {  TextInput, Text } from 'react-native'
import { styles } from '../styles/style'

export default function Input(props){

    return(
      <>
        <Text>{props.label}</Text>      
        <TextInput
          style={styles.input}
          placeholder= {props.place}
          placeholderTextColor={'gray'}
          secureTextEntry={props.password || false}
          value={props.value}
          onChangeText={props.onChange}
        />
      </>
    )
}





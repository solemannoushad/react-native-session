import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/style'

export default function Btn(props) {
  return (
    <TouchableOpacity onPress={props.clickFunction} style={styles.btnMain}>
        <Text style={styles.btnTxt}>{props.title}</Text>
    </TouchableOpacity>
  )
}
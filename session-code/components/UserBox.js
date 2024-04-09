import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/style'

export default function UserBox({uri, firstName, lastName, email, clickFunc}) {
  return (
    <TouchableOpacity onPress={clickFunc} style={styles.userBoxMain}>
      <Image
        source={{uri: uri}}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <View style={{marginLeft: 20}}>
        <Text style={styles.userBoxTxt}>{firstName} {lastName}</Text>
        <Text style={styles.userBoxTxt}>{email}</Text>
      </View>
    </TouchableOpacity>
  )
}
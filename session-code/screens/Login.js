import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styles/style'
import Btn from '../components/Btn'
import axios from 'axios'

export default function Login({navigation}) {


    useEffect(()=>{
        const fetchData = async()=>{
            await axios.delete('https://usmanlive.com/wp-json/api/stories/1879', {
                title: "React Native",
                content: 'Api testing'
            })
            .then((res)=>{
                // console.log(res.data);
                console.log("Success")
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        // fetchData();
    } , [])

    const loginHandle = ()=>{
        navigation.navigate("BottomTab");
        // navigation.navigate("Home");
    }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Btn
        title="Login"
        clickFunction={loginHandle}
      />
    </View>
  )
}
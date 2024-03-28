import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/style'
import Input from '../components/Input'
import Btn from '../components/Btn'
import UserBox from '../components/UserBox'

export default function Home() {

    // State Variable

    const [data, setData] = useState([]);

      const updateData = ()=>{
        setData([
            {
              "id": 7,
              "email": "michael.lawson@reqres.in",
              "first_name": "Michael",
              "last_name": "Lawson",
              "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
              "id": 8,
              "email": "lindsay.ferguson@reqres.in",
              "first_name": "Lindsay",
              "last_name": "Ferguson",
              "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
              "id": 9,
              "email": "tobias.funke@reqres.in",
              "first_name": "Tobias",
              "last_name": "Funke",
              "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
              "id": 10,
              "email": "byron.fields@reqres.in",
              "first_name": "Byron",
              "last_name": "Fields",
              "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
              "id": 11,
              "email": "george.edwards@reqres.in",
              "first_name": "George",
              "last_name": "Edwards",
              "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
              "id": 12,
              "email": "rachel.howell@reqres.in",
              "first_name": "Rachel",
              "last_name": "Howell",
              "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
          ])
      }

      useEffect(()=>{
        console.log("Data Changed");
      } , [data])

    
  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.txt}>React Native</Text>
        </View>


        <View style={{marginTop: 20}}>
        {/* Custom TextInput Component */}
            <Input
                place={"Email"}
                label="Email"
                />
            <Input
                place={"Password"}
                label="Password"
                password={true}
                />
            {/* Custom Button Component */}
            <Btn
                title="Click to Preview"
                clickFunction={updateData}
            />
        </View>

        {/* Flatlist */}

        <FlatList
            data={data}
            keyExtractor={data.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
                return(
                    <UserBox
                        uri={item.avatar}
                        firstName={item.first_name}
                        lastName={item.last_name}
                        email={item.email}
                        clickFunc = {()=>{
                            console.log(`${item.first_name} Clicked`)
                        }}
                    />
                )
            }}
        />


    </View>
  )
}
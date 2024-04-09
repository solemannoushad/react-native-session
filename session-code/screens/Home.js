import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/style'
import Input from '../components/Input'
import Btn from '../components/Btn'
import UserBox from '../components/UserBox'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Home({navigation}) {

    // State Variable

    const [data, setData] = useState([]);

      const updateData = ()=>{
        setData([
            {
              "id": 1,
              "email": "michael.lawson@reqres.in",
              "first_name": "Michael",
              "last_name": "Lawson",
              "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
              "id": 2,
              "email": "lindsay.ferguson@reqres.in",
              "first_name": "Lindsay",
              "last_name": "Ferguson",
              "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
              "id": 3,
              "email": "tobias.funke@reqres.in",
              "first_name": "Tobias",
              "last_name": "Funke",
              "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
              "id": 4,
              "email": "byron.fields@reqres.in",
              "first_name": "Byron",
              "last_name": "Fields",
              "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
              "id": 5,
              "email": "george.edwards@reqres.in",
              "first_name": "George",
              "last_name": "Edwards",
              "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
              "id": 6,
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

      const [email, setEmail] = useState('');
      const [name, setName] = useState('');


      const addData = ()=>{

        const arr = [...data];

        arr.push({
          "id": arr.length +1,
          "email": email,
          "first_name": name,
          "last_name": "",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },)

        setData(arr);
      }

      const backBtn = ()=>{
        // navigation.navigate("Login");
        navigation.goBack();
        console.log('object')
      }

    
  return (
    <ScrollView>

    {/* <ScrollView contentContainerStyle={{
      backgroundColor: 'red',
      flex: 1
    }}> */}
          <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.txt}>React Native</Text>
        </View>
        <View style={{marginTop: 50, flex: 1}} onPress={backBtn}>
          <Fontisto name="email" size={20} color={'black'} />
        </View>


        <View style={{marginTop: 20}}>
        {/* Custom TextInput Component */}
                <Input
                    place={"Name"}
                    label="Name"
                    value={name}
                    onChange={(name)=> setName(name) }
                    />
            <Input
                place={"Email"}
                label="Email"
                value={email}
                onChange={(email)=> setEmail(email) }

                />
            {/* <Input
                place={"Email"}
                label="Email"
                />
            <Input
                place={"Password"}
                label="Password"
                password={true}
                /> */}
            {/* Custom Button Component */}
            <Btn
                title="Add"
                clickFunction={backBtn}
            />
            <Btn
                title="Click to Preview"
                clickFunction={updateData}
                icon={<FontAwesome name="user" size={20} color={'white'} />}
            />
            
            
        </View>

        {/* Flatlist */}


        {
          data.map((item)=>{
            return (
              <View key={item.id}>

                <UserBox
                          uri={item.avatar}
                          firstName={item.first_name}
                          lastName={item.last_name}
                          email={item.email}
                          clickFunc = {()=>{
                              console.log(`${item.first_name} Clicked`)
                          }}
                      />
              </View>
            )
          })
        }


    </View>
    </ScrollView>

  )
}
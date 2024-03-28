
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles1 } from './styles/style';
import Input from './components/Input.js';

export default function App() {

  console.log("Outside");

  const [data, setData] = useState();
  const data1 = [
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
  ]

  useEffect(()=>{
    console.log("useEffect");
  } , [data])

  const img = "https://reqres.in/img/faces/11-image.jpg";

  return (
    <>
      <View style={styles.container}>

    {/* <View style={{
      flex: 1
    }}>
        <TextInput
          style={styles.input}
        />
    </View> */}
{/* 
    <Image
      source={{uri : img}}
      source={require('./assets/images/images.png')}
      style={{width: 100, height: 100}}
    /> */}

        
        {/* <Text style={{
          fontSize: 20,
          color: '#ffffff'
        }}>
            React Native
        </Text> */}
        {/* <TouchableOpacity onPress={()=> setData(data + 1)}>
          <Text>Button</Text>
        </TouchableOpacity> */}

        <Input
          place="Email"
        />
        <Input
        place="Password"
        />
        <Input
          place="Phone"
        />

        <FlatList
            data={data1}
            keyExtractor={(item) => item.id}
            // showsVerticalScrollIndicator={false}
            horizontal={true}
            renderItem={({item})=>{
              return <Text style={{fontSize: 20, marginHorizontal: 50}}>{item.first_name}</Text>
            }}
        />


            



        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  input: {
    backgroundColor: '#eeeeee',
    padding: 20,
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20
  }
});

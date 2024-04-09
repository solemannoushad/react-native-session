import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginHorizontal: 20,
    },
    txt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20
    },
    input: {
      width: '70%',
      borderWidth: 1,
      borderColor: '#eeeeee',
      padding: 8,
      borderRadius: 5,
      marginVertical: 10
    },
    btnMain: {
      backgroundColor: 'black',
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 7,
      marginVertical: 10,
      borderRadius: 8,
      flexDirection: 'row'

    },
    btnTxt: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 10
    },
    userBoxMain: {
      flex: 1,
      backgroundColor: '#eeeeee',
      marginVertical: 5,
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10
    },
    userBoxTxt: {
      color: 'black',
      fontSize: 15
    }
  });
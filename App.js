/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState}from 'react';
import {View ,  Text , TouchableOpacity ,TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';


const App = () =>{
const [number , setNumber] = useState("")
const [confirm , setConfirm] = useState()
  const request =  async() =>{
    let mobile = "8238678399"
    const phoneNumberString = "+91" + mobile
    const confirmation = await auth().signInWithPhoneNumber(phoneNumberString);
    console.log("%%%%%%%%%",confirmation)
    setConfirm(confirmation)
  }

  const confim = async () =>{
const res = await confirm.confirm(number)

console.log("&&&&&&",res)
  }
  return (
    <View style={{flex:1 , alignItems:"center" , justifyContent:"center"}}>
      <TouchableOpacity onPress={() => request()}>
      <Text>Click</Text>
      </TouchableOpacity>

      <TextInput value={number}
      placeholder="Input"
                onChangeText={(val) =>setNumber(val)}/>
 <TouchableOpacity onPress={() => confim()}>
      <Text>confirm</Text>
      </TouchableOpacity>
            
    </View>
  );
}
export default App;

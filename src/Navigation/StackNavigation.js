import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PhoneNumber, OtpVerification, Home, DocumentVerification, Pancard, Aadhaar, AadhaarInfo, PersonalData } from '../Screens'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name='PhoneNumber' component={PhoneNumber} options={{headerShown:false}}/> 
         <Stack.Screen name='OtpVerification' component={OtpVerification} options={{headerShown:false}}/> 
         <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
         <Stack.Screen name='DocumentVerification' component={DocumentVerification} options={{headerShown:false}}/>
         <Stack.Screen name='Pancard' component={Pancard} options={{headerShown:false}}/>
         <Stack.Screen name='Aadhaar' component={Aadhaar} options={{headerShown:false}}/>
         <Stack.Screen name='AadhaarInfo' component={AadhaarInfo} options={{headerShown:false}}/>
         <Stack.Screen name='PersonalData' component={PersonalData} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}
//import liraries
import React, { Component } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/Navigation/StackNavigation';
 

export default function MyComponent() {

  useEffect(()=>{
  SplashScreen.hide();
   },[])

  return (
   <StackNavigation/>
  )
};
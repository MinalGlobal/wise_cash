import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Icon from 'react-native-vector-icons/Ionicons';
import {OTPcheck} from '../../Helper/Auth'

export default function PhoneNumber(props) {
  const [otp, setOtp] = useState()
  console.log("^^^^^^^^^^^^", props, otp)
  const Result = props?.route?.params?.params

  const OTPverify = async () => {
    console.log("^^^^^^^^^^^^", otp)
    OTPcheck(Result, otp , navigation)
    // const res = await Result.confirm(otp);

    // const uid = res?.user?.uid
    // console.log("$$$$$$", uid)
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }} bounces={false}>
          <View>
            <Image style={styles.titallogo} source={require('../../Assets/images/titallogo.png')} />
            <Text style={styles.otpsuggetion}>OTP Verification</Text>
            <OTPInputView
              style={{ width: '60%', height: '8%', alignSelf: 'center', }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              onCodeFilled={(code => {
                setOtp(code)
                OTPverify()
                // console.log(`Code is ${code}, you are good to go!`)
              })}

            />
            <Text style={styles.smstxt}>A 4 Digit OTP Will be sent via SMS to verify your mobile number</Text>

          </View>
          <View style={styles.signinview}>
            <View style={styles.signinbox}>
              <Text style={styles.signintxt}>Sign in</Text>
              <TouchableOpacity style={styles.arrowbox} onPress={() => navigation.navigate('Home')}>
                <Icon
                  style={styles.icon}
                  name="arrow-forward"
                  color="#ffffff"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newusertxt}>
              <Text style={styles.usertxt}>Automatic registation of new users</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },

  titallogo: {
    height: moderateScale(300),
    width: moderateScale(300),
    alignSelf: 'center',
  },

  otpsuggetion: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: '#28448c',
    paddingBottom: moderateScale(25),
    alignSelf: 'center',
    alignItems: 'center',
  },

  smstxt: {
    color: '#28448c',
    fontSize: scale(12),
    paddingTop: moderateScale(20),
    fontWeight: '500',
    marginHorizontal: moderateScale(35),
    lineHeight: moderateVerticalScale(24),
    alignSelf: 'center',
  },

  underlineStyleHighLighted: {
    borderColor: '#b92a42',
    color: '#000',
  },

  signinview: {
    bottom: 20,
  },

  signinbox: {
    flexDirection: 'row',
    paddingTop: 45,
    paddingRight: 30,
    justifyContent: 'flex-end',
  },

  signintxt: {
    alignSelf: 'center',
    paddingRight: 5,
    color: '#28448c',
    fontWeight: 'bold',
  },

  arrowbox: {
    height: 45,
    width: 45,
    backgroundColor: '#cf132f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  newusertxt: {
    marginHorizontal: moderateScale(65),
  },

  usertxt: {
    color: '#28448c',
    marginTop: moderateScale(8),
    fontWeight: '600',
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    color: '#000000',
    margin: 0,
    padding: 0,
  },
});


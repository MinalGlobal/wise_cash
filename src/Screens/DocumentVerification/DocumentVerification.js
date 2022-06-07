import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Touchablebutton from '../../Components/Touchablebutton';

export default function DocumentVerification({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
    <ScrollView>
        <View>
          <View style={styles.headericonview}>
            <TouchableOpacity style={styles.arrowbtn} onPress={() => navigation.goBack()}>
              <Icon
                style={styles.headericon}
                name='arrow-back-outline'
                size={35}
                color={'#696969'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.certification}>Certification</Text>
          <Touchablebutton iconname='credit-card' tital='Pancard' process='arrow-right-circle' onPress={() => navigation.navigate('Pancard')} />
          <Touchablebutton iconname='card-account-details-outline' tital='Aadhaar' process='arrow-right-circle' onPress={() => navigation.navigate('Aadhaar')} />
          <Touchablebutton iconname='account-circle' tital='Personal Data' process='arrow-right-circle' onPress={() => navigation.navigate('PersonalData')} />
          <Touchablebutton iconname='line-scan' tital='Face ID' process='arrow-right-circle' onPress={() => navigation.navigate('PersonalData')} />
          <Touchablebutton iconname='account-box' tital='Bank Account' process='arrow-right-circle' onPress={() => navigation.navigate('AadhaarInfo')} />
        </View>
        </ScrollView>
        <View style={styles.box2}>
          <View style={styles.nextstepview}>
            <TouchableOpacity style={styles.loginScreenButton} onPress={() => navigation.navigate('OtpVerification')}>
              <Text style={styles.loginText}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
     backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    
  },
  headericonview: {
    paddingLeft: moderateScale(25),
    paddingTop: moderateScale(35),

  },
  arrowbtn: {
    height: moderateVerticalScale(35),
    width: moderateVerticalScale(40),
    justifyContent: 'center'
  },
  headericon: {
    justifyContent: 'center',
    alignSelf: 'center'
  },

  certification: {
    fontSize: scale(36),
    fontWeight: '500',
    color: '#28448c',
    alignSelf: 'center',
    paddingTop: 35
  },
  loginScreenButton: {
    backgroundColor: '#28448c',
    borderRadius: scale(18),
    height: moderateVerticalScale(45),
    width: moderateScale(240),
    justifyContent: 'center',
    marginHorizontal: moderateScale(35),
    alignSelf: 'center',
    position : 'absolute',
    bottom : 20,
    zIndex : 0

  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '600',

  },
  box2: {
   
  }
})


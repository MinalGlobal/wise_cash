import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Progressbaar from '../../Components/Progressbaar';
import Dropdownn from '../../Components/Dropdownn';
import ScrollViewIndicator from 'react-native-scroll-indicator';

export default function PersonalData({navigation}) {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
   <ScrollView>
        <View>
          <View style={styles.headericonview}>
            <TouchableOpacity
              style={styles.arrowbtn}
              onPress={() => navigation.goBack()}>
              <Ionicons
                style={styles.headericon}
                name="arrow-back-outline"
                size={35}
                color={'#696969'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box1}>
            <Text style={styles.certification}>Personal Data</Text>
          </View>
          <Progressbaar innerprogress={{width: '80%'}} />
          <Text style={styles.txtinfo}>
            Please confirm your personal ingormation. the correctness of the
            information will affect the result of the review or quota. if the
            information is incorrect, you can choose to mofify it.
          </Text>
         <Text style={styles.infotxt}>Personal information</Text> 
        </View>
        <View style={styles.textinputview}>
        <ScrollViewIndicator
            shouldIndicatorHide={false}
            flexibleIndicator={false}
            scrollIndicatorContainerStyle={{
              backgroundColor: '#ffffff',
              borderWidth: 1,
            }}
            scrollIndicatorStyle={{
              opacity: 1,
              backgroundColor: '#b92a42',
            }}>
            <Dropdownn name="Education" lable="Please Select a Degree"></Dropdownn>
            <Dropdownn name="Marriage" lable="Please Select a Marriage"></Dropdownn>
            <Dropdownn name="Jobs" lable="Please Select a job"></Dropdownn>
            <Dropdownn name="Salary" lable="Please Select Salary"></Dropdownn>
            <Text style={styles.contacttxt}>Emergency Contact</Text>
            <Text style={styles.relationshiptxt}>Relationship</Text>
            <View style={styles.relationshipview}>
      <TouchableOpacity
                  style={styles.relationbtn}
                  onPress={() => navigation.navigate('OtpVerification')}>
                 <Text style={styles.relationText}>Friends</Text>
           </TouchableOpacity>
           <TouchableOpacity
               style={styles.relationbtn}
               onPress={() => navigation.navigate('OtpVerification')}>
               <Text style={styles.relationText}>Relative</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.relationbtn}
              onPress={() => navigation.navigate('OtpVerification')}>
            <Text style={styles.relationText}>Other</Text>
        </TouchableOpacity>
            </View>
        </ScrollViewIndicator> 
        </View>
        <View>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate('OtpVerification')}>
          <Text style={styles.loginText}>Next Step</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
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
    justifyContent: 'center',
  },
  headericon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  certification: {
    fontSize: scale(36),
    fontWeight: '500',
    color: '#28448c',
    paddingTop: 35,
    marginBottom: 15,
  },

  infotxt: {
    paddingTop: 25,
    fontSize: 16,
    color: '#b92a42',
    fontWeight: '600',
    paddingLeft: 35,
  },

  box1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtinfo: {
    paddingTop: 25,
    color: '#28448c',
    fontWeight: '700',
    alignSelf: 'center',
    paddingHorizontal: 20,
    lineHeight: 25,
    fontSize: 14,
  },
  textinputview: {
    paddingTop: 10,
    // flex:1
    height:310
   
  },
  confirmButton: {
    backgroundColor: '#28448c',
    borderRadius: scale(18),
    height: moderateVerticalScale(45),
    width: moderateScale(150),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  confirmText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '600',
  },
  scanerror: {
    width: 220,
    height: 70,
    alignSelf: 'flex-end',
    paddingRight: 20,
    color: 'red',
    paddingTop: 15,
  },

  RescanButton: {
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#28448c',
    borderRadius: scale(18),
    height: moderateVerticalScale(45),
    width: moderateScale(150),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  RescanText: {
    color: '#28448c',
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '600',
  },

  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },

  relationshipview :{
    flexDirection : 'row',
    justifyContent : 'space-evenly'
  },

  contacttxt : {
    paddingTop: 25,
    fontSize: 16,
    color: '#b92a42',
    fontWeight: '600',
    paddingLeft: 35,
  },

  relationshiptxt : {
    paddingTop: 15,
    fontSize: 16,
    color: '#28448c',
    fontWeight: '600',
    paddingLeft: 35,
    paddingBottom : 15
  },

  loginScreenButton: {
    backgroundColor: '#28448c',
    borderRadius: scale(18),
    height: moderateVerticalScale(45),
    width: moderateScale(240),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '600',
  },

  relationbtn : {
    backgroundColor: '#28448c',
    borderRadius: scale(8),
    height: moderateVerticalScale(35),
    width: moderateScale(100),
    justifyContent: 'center',
    alignSelf: 'center',
  },

  relationText : {
    color: '#fff',
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '600',
  }
});

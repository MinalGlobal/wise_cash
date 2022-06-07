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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Progressbaar from '../../Components/Progressbaar';

export default function Aadhaar({navigation}) {
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
            <Text style={styles.aadhartxt}>Aadhaar</Text>
            <TouchableOpacity style={styles.question}>
              <AntDesign
                style={styles.questionicon}
                name="questioncircleo"
                size={15}
                color={'red'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.progressview}>
            <Progressbaar innerprogress={{width: '60%'}}></Progressbaar>
            <Text style={styles.cardtxt}>Upload ID Card</Text>
          </View>
          <View style={styles.imageview}>
            <View style={styles.frontview}></View>

            <View style={styles.reverseview}></View>
          </View>
          <TouchableOpacity style={styles.loginScreenButton} onPress={() => navigation.navigate('OtpVerification')}>
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

  aadhartxt: {
    fontSize: scale(36),
    fontWeight: '500',
    color: '#28448c',
    paddingTop: 35,
  },

  box1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  question: {
    paddingTop: scale(52),
  },

  questionicon: {
    paddingLeft: moderateScale(10),
  },
  progressview: {
    paddingTop: 15,
  },
  cardtxt: {
    paddingTop: 25,
    fontSize: 16,
    color: '#b92a42',
    fontWeight: '600',
    paddingLeft: 35,
  },

  frontview: {
    height: 150,
    width: 300,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: 'silver',
    elevation: 5,
    backgroundColor: 'white',
    alignSelf : 'center',
    marginTop : 25
  },
  reverseview: {
    height: 150,
    width: 300,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: 'silver',
    elevation: 5,
    backgroundColor: 'white',
    alignSelf : 'center',
    marginTop : 35
  },
  loginScreenButton: {
    backgroundColor: '#28448c',
    borderRadius: scale(18),
    height: moderateVerticalScale(45),
    width: moderateScale(240),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop : 40,

  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '600',

  },
});

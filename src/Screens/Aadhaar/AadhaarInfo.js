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
import TextinputWithText from '../../Components/TextinputWithText';
import Datepicker from '../../Components/Datepicker';
import Dropdownn from '../../Components/Dropdownn';
import ScrollViewIndicator from 'react-native-scroll-indicator';

export default function Aadhaarinfo({navigation}) {
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
          </View>
          <Progressbaar innerprogress={{width: '50%'}} />
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
            <TextinputWithText name="Aadhaar No" />
            <Text style={styles.scanerror}>
              *this field cannot be modified, if there is an error, please go
              back and scan again
            </Text>
            <TextinputWithText name="Name" />
            <Dropdownn name="Gender" lable="Male"></Dropdownn>
            <Datepicker name="Birthday"></Datepicker>
            <TextinputWithText name="State" />
          </ScrollViewIndicator>
        </View>

        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.RescanButton}>
            <Text style={styles.RescanText}>Rescan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm </Text>
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
    height: 330,
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
});

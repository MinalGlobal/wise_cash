
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputWithLabel from '../../Components/TextInputWithLabel';

//HElper
import { OtpVerification } from '../../Helper/Auth'

export default function PhoneNumber({ navigation }) {

    const [number, SetNumber] = useState("")

    // function getotp() {
    //     const 
    //     navigation.navigate('OtpVerification')
    // }

    return (
        <KeyboardAvoidingView style={styles.container} >
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }} bounces={false}>
                <View>
                    <Image style={styles.titallogo} source={require('../../Assets/images/titallogo.png')} />
                    <Text style={styles.phonesuggetion}>Enter Phone Number</Text>
                    <View style={styles.phonebox}>
                        <TextInputWithLabel
                            placeHolder='Enter Phone Number'
                            keyboardType='number-pad'
                            placeholderTextColor='#b92a42'
                            style={styles.numberinput}
                            value={number}
                            changeText={SetNumber}
                            maxLength={10}
                        />
                    </View>
                    <Text style={styles.smstxt}>A 6 Digit OTP Will be sent via SMS to verify your mobile number</Text>
                </View>
                <View style={styles.loginview}>
                    <TouchableOpacity style={styles.loginScreenButton} onPress={() => OtpVerification(number, navigation)}>
                        <Text style={styles.loginText}>Get OTP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.newusertxt}>
                        <Text style={styles.usertxt}>Automatic registation of new users</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'space-between'
    },

    titallogo: {
        height: moderateScale(300),
        width: moderateScale(300),
        alignSelf: 'center'
    },

    phonesuggetion: {
        marginLeft: moderateScale(35),
        fontSize: scale(28),
        fontWeight: 'bold',
        color: '#28448c',
        paddingBottom: moderateScale(25)
    },

    numberinput: {
        height: moderateVerticalScale(40),
        fontSize: 24,
        color: 'blue',
        padding: 0,
        margin: 0,
    },

    phonebox: {
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(35),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: 'white'
    },

    smstxt: {
        color: '#28448c',
        fontSize: scale(12),
        paddingTop: moderateScale(20),
        fontWeight: '500',
        marginHorizontal: moderateScale(35),
        lineHeight: moderateVerticalScale(24),
        alignSelf: 'center'
    },

    loginview: {
        marginBottom: moderateVerticalScale(20),
    },

    loginScreenButton: {
        backgroundColor: '#28448c',
        borderRadius: scale(50),
        height: moderateVerticalScale(50),
        justifyContent: 'center',
        marginHorizontal: moderateScale(35)
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: scale(18),
        fontWeight: '600',

    },

    usertxt: {
        color: '#28448c',
        marginTop: moderateScale(10),
        fontWeight: '600',
        alignSelf: 'center',
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    newusertxt: {
        marginHorizontal: moderateScale(65),
        paddingTop: moderateVerticalScale(10),
    }

});

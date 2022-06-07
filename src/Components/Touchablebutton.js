import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'

export default function Touchablebutton({ tital, iconname, process, ...props }) {

    return (
        <View style={styles.buttonstyle}>
            <TouchableOpacity style={styles.iconview} {...props}>
                <View style={styles.box1}>
                    <Icon
                        style={styles.icon}
                        name={iconname}
                        color='#696969'
                        size={30}
                    />
                    <Text style={styles.titaltxt}>{tital}</Text>
                </View>
                <View style={styles.box2}>
                    <Icon
                        style={styles.icon2}
                        name={process}
                        color='#696969'
                        size={30}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonstyle: {
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: scale(10),
        height: moderateScale(50),
        width: moderateScale(300),
        marginTop: moderateVerticalScale(30)
    },
    iconview: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: moderateScale(20),
        height: moderateScale(50),
        width: moderateScale(300),
        justifyContent: 'space-between'
    },

    icon: {
        paddingRight: moderateScale(20),
        alignSelf: 'center'
    },

    titaltxt: {
        alignSelf: 'center',
        fontSize: scale(16),
        fontWeight: '600',
        color: '#28448c',
    },

    box1: {
        flexDirection : 'row'
    },
    box2: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});







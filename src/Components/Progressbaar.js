import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'

export default function Progressbaar({ innerprogress = {} }) {

    return (
        <View style={styles.progressBar1}>
            <View style={styles.progressBar}>
                <View style={{ ...styles.innerprogress, ...innerprogress }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar1: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        padding: 8,
    },
    progressBar: {
        height: 10,
        width: 200,
        backgroundColor: '#ffffff',
        borderColor: '#525252',
        borderRadius: 10,
        borderWidth: 1,
    },
    innerprogress: {
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        bottom: 0,
        backgroundColor: '#cf132f',
    }
});



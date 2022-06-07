import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function TextinputWithText({ name}) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtname}>{name}</Text>
            <Text style={{alignSelf : 'center' , paddingRight : 15 ,  color: '#28448c', fontWeight : 'bold'}}>:</Text>
            <TextInput style={styles.txtadd}> </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent : 'center',
        flexDirection: 'row',
        paddingTop : 20
    },

    txtname: {
        paddingRight : 10,
        width : 110,
        color: '#28448c',
        fontWeight: 'bold',
        alignSelf : 'center',
        fontSize: 16,
        
    },

    txtadd: {
        height: 40,
        width: 200,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: 'white'
    },

});


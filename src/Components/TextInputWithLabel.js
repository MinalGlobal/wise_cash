import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const TextInputWithLabel = ({
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    value,
    changeText,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.inlineStyle}
                    value={value}
                    onChangeText={(val) => changeText(val)}
                    placeholderStyle={{ fontSize: 24 }}
                    {...props}
                />
        </View>
    );
};
const styles = StyleSheet.create({
    inputStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 50
    },
    labelTextStyle : {
       fontSize : 24,
       color: '#28448c',
       fontWeight : '600',  
    },
    inlineStyle : {
        height : '100%',
        fontSize : 24,
    }

});
export default TextInputWithLabel;
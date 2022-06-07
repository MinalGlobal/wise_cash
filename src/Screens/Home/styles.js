
import { StyleSheet } from 'react-native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    amountview: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: moderateScale(220),
        width: moderateScale(300),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: scale(10),
        marginTop: moderateScale(30),

    },

    titaltxt: {
        alignSelf: 'center',
        fontWeight: '500',
        color: '#28448c',
        paddingBottom: moderateScale(10),
    },

    maximumtxt: {
        alignSelf: 'center',
        fontWeight: '500',
        color: '#cf132f',
        fontSize: scale(19)
    },

    amounttxt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#cf132f',
        fontSize: scale(34),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(20),
    },

    certificationbtn: {
        backgroundColor: '#28448c',
        height: moderateVerticalScale(40),
        width: moderateScale(250),
        justifyContent: 'center',
        borderRadius: scale(20),
        alignSelf: 'center'
    },

    continuetxt: {
        color: '#ffffff',
        fontSize: scale(16),
        alignSelf: 'center'
    },

    certificationview: {
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: scale(10),
        height: moderateScale(65),
        width: moderateScale(300),
        flexDirection: 'row',
        marginTop: moderateScale(30),
    },
    box1: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    certibtn: {
        paddingLeft: moderateScale(30),
        color: '#cf132f',
        fontSize: scale(14),
        fontWeight: '500',
    },

    mobiletxt: {
        paddingLeft: moderateScale(30),
        color: '#28448c',
        fontSize: scale(16),
        fontWeight: '500',
        paddingBottom: moderateScale(5),
    },

    suggestiontxt: {
        paddingLeft: moderateScale(30),
        color: '#cf132f',
        fontSize: scale(14)
    },

    box2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;
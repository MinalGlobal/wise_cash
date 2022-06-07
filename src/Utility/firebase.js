
import auth from '@react-native-firebase/auth';

export const OTPverify = (mobile) =>{
    const response = auth().signInWithPhoneNumber(mobile)

    return response
}
import { OTPverify } from '../Utility/firebase'


export const OtpVerification = async (number, navigation) => {
    const mobile = "+91" + number
    const res = await OTPverify(mobile)

    if (res._verificationId !== undefined || res._verificationId !== "") {
        navigation.navigate('OtpVerification', { params: res })
    }

}


export const OTPcheck = async (Result , otp , navigation) =>{
    const res = await Result.confirm(otp);

    const uid =  res?.user?.uid ?? ""

    if(uid !== "" || uid !== undefined){
        console.log("$$$$$$", uid)
    }
   
}
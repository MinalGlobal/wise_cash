import React, { useState } from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchablebutton from '../../Components/Touchablebutton'



export default function Home({ navigation }) {
    const title = 'As Long as 1 minute, the amount is seconds';

    const [refresh, setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)

        setTimeout(() => {
            setRefresh(false)
        },1000)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()}/>} >
                    <View style={styles.amountview}>
                        <Text style={styles.titaltxt}>{title}</Text>
                        <Text style={styles.maximumtxt}>Maximum Loanable amount</Text>
                        <Text style={styles.amounttxt}>$ 80,000</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('DocumentVerification')} style={styles.certificationbtn}>
                            <Text style={styles.continuetxt}>Continue Certification</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.certificationview}>
                        <View style={styles.box1}>
                            <Text style={styles.mobiletxt}>+91 812*****84</Text>
                            <TouchableOpacity style={styles.mobilebtn}>
                                <Text style={styles.certibtn}>Not Completed Certification</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box2}>
                            <TouchableOpacity onPress={() => navigation.navigate()}>
                                <Icon
                                    style={styles.certificationicon}
                                    name="certificate"
                                    color="#000000"
                                    size={35}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Touchablebutton iconname='cart' tital='Loan Market' />
                    <Touchablebutton iconname='credit-card' tital='Bind Bank' />
                    <Touchablebutton iconname='headset' tital='Customer Service' />
        
            </ScrollView>
        </SafeAreaView>
    )
}






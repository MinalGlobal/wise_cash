import  { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput
  } from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-datepicker';


const MyComponent = ({name}) => {
    const [date, setDate] = useState('09-10-2020');
    return (
        <View style={styles.container}>
        <Text style={styles.txtname}>{name}</Text>
        <Text style={{alignSelf : 'center' , paddingRight : 15 ,  color: '#28448c', fontWeight : 'bold'}}>:</Text>
        <View style={styles.datepickerr}>
        <DatePicker style={{ width: 200}}
        date={date} 
        mode="date" 
        format="DD-MM-YYYY"
        minDate="01-01-1960"
        maxDate="01-01-2019"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0,
            color : 'red',
          },
          dateInput: {
            marginLeft: 0,
            borderWidth:0,
            alignItems : 'flex-start',
            paddingLeft : 20,
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
      </View>
    </View>
    );
};


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
    datePickerStyle: {
        width : 200,
       
      },

      datepickerr : {
        height: 40,
        width: 200,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "silver",
        elevation: 5,
        backgroundColor: 'white',
      }
});


export default MyComponent;

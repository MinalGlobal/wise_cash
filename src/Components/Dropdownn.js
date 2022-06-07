import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Gender = ['Male', 'Female', 'other'];

const Dropdownn = ({name, lable}) => {

    const Gender = [
        'Male','Female','Other'
      ];

  return (
    <View style={styles.container}>
      <Text style={styles.txtname}>{name}</Text>
      <Text
        style={{
          alignSelf: 'center',
          paddingRight: 15,
          color: '#28448c',
          fontWeight: 'bold',
        }}>
        :
      </Text>
      <View style={styles.Dropdownnview}>
      <SelectDropdown
      data={Gender}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText={lable}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      dropdownBackgroundColor={styles.dropdownbackcolor}
    />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },

  txtname: {
    paddingRight: 10,
    width: 110,
    color: '#28448c',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
  },
 Dropdownnview :{
    height: 40,
    width: 200,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: "silver",
    elevation: 5,
 },
  dropdown1BtnStyle : {
    height: 40,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  dropdown1BtnTxtStyle : {
    color: '#28448c',
    textAlign : 'left'
  },
  dropdown1DropdownStyle : {
    borderRadius : 10,
    marginTop : 10,
  },
  dropdown1RowTxtStyle : {
    color : '#28448c',
  },


});

export default Dropdownn;

import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import InputComponent from '../Components/Global/inputComponentWithIcon';

function screen() {
  useEffect(() => {}, []);
  return (
    <View>
      <InputComponent />
    </View>
  );
}

const styles = StyleSheet.create({});

export default screen;

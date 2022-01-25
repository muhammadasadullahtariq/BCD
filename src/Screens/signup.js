import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import InputComponent from '../Components/Global/inputComponentWithIcon';
import imageSource from '../Asserts/splashImage.png';
import Button from '../Components/Global/buttonComponent';
import TouchableText from '../Components/UserAuth/touchAbleText';
import {CommonActions} from '@react-navigation/native';
//mail//user//lock
function screen({navigation, route}) {
  useEffect(() => {}, []);
  return (
    <View>
      <Image source={imageSource} style={{alignSelf: 'center'}} />
      <InputComponent icon={'user'} placeHolder={'Enter user name'} />
      <InputComponent icon={'mail'} placeHolder={'Enter email'} />
      <InputComponent icon={'lock'} placeHolder={'Enter password'} />
      <Button text={'Sign in'} style={{marginTop: 20}} />
      <TouchableText
        simpleText={'Already have account'}
        touchableText={'Sign in'}
        style={{marginTop: '10%'}}
        onPress={() => {
          navigation.reset;
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }),
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default screen;

import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard, Platform} from 'react-native';

export const component = props => {
  return (
    <View style={[style.mainView, props.style]}>
      <TextInput
        autoCorrect={false}
        placeholder={props.placeHolder}
        value={props.text}
        returnKeyType="go"
        multiline={props.multiLine}
        selectionColor={"#2A2D2D"}
        secureTextEntry={props.password}
        numberOfLines={props.numberOfLines}
        maxLength={props.maxLength}
        keyboardType={props.Keyboard == null ? 'default' : props.Keyboard}
        onChangeText={props.textHandler}
        style={[style.textCointaner, props.style1]}
        textAlignVertical={props.flag ? 'top' : 'center'}
        onSubmitEditing={props.onSubmit}></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    width: '90%',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    shadowColor: '#2A2D2D',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.55,
    shadowRadius: 2,

    ...Platform.select({
      ios: {
        elevation: 5,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  textCointaner: {
    width: '100%',

    padding: 5,
    ...Platform.select({
      ios: {
        paddingTop: 5,
      },
      android: {},
    }),
    color: '#092058',
    borderRadius: 30,
    backgroundColor: '#ffffff',
    height: '100%',
    fontSize: 15,
    textAlign: 'center',
    overflow: 'hidden',
    fontWeight: '500',
  },
});

// #a {
//   width: 187px;
//   height: 15px;
//   color: #092058;
//   font-family: Montserrat;
//   font-size: 15px;
//   font-weight: 500;
//   line-height: 19.5px;
//   text-align: center;
// }

// #input {
//   width: 312px;
//   height: 50px;
// }

// #rectangle {
//   width: 311px;
//   height: 50px;
//   border-radius: 11px;
//   background: #ffffff;
// }

// #enteryourp {
//   width: 135px;
//   height: 20px;
//   color: #7d90aa;
//   font-size: 13px;
//   font-weight: 400;
//   line-height: 19.5px;
//   text-align: center;
// }

export default component;

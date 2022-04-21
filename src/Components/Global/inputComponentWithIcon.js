import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import InputComponent from './inputComponent';
import Icon from 'react-native-vector-icons/Feather';

const screen = props => {
  return (
    <View style={[styles.mainContainer, props.mainContainer]}>
      <View style={styles.seacrIconViewContainer}>
        <Icon name={props.icon} color="#2A2D2D" size={24} />
      </View>
      <InputComponent
        style={[{width: '80%'}, props.style]}
        placeHolder={props.placeHolder}
        password={props.password}
        text={props.text}
        textHandler={props.textHandler}
        onSubmit={props.onSubmit}
        style1={{
          textAlign: 'left',
          paddingLeft: 45,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  seacrIconViewContainer: {
    height: 66,
    width: 66,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -40,
    zIndex: 5,
    shadowColor: '#2A2D2D',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.55,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default screen;

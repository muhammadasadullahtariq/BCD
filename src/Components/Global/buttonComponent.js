import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native';
import T from './infoText';

const component = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[props.style1]}>
      <View
        opacity={props.disabled ? 0.5 : 1}
        style={[
          {
            justifyContent: 'center',
            height: 50,
            backgroundColor: '#2A2D2D',
            borderRadius: 30,
            alignSelf: 'center',
            alignItems: 'center',
          },
          props.style,
        ]}>
        <T
          style={[styles.textContainer]}
          text={props.text}
          viewStyle={{paddingHorizontal: 20, justifyContent: 'center'}}></T>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 10,
    overflow: 'hidden',
    paddingTop: 8,
  },
});

export default component;

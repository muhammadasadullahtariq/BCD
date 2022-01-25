import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const screen = props => {
  return (
    <View style={[styles.mainContainer, props.viewStyle]}>
      <Text style={[styles.textContainer, props.style]}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  textContainer: {
    fontSize: 15,
    color: '#2A2D2D',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default screen;

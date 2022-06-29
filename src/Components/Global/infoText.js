import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const screen = props => {
  return (
    <View style={[styles.mainContainer, props.viewStyle]}>
      <Text
        style={[styles.textContainer, props.style]}
        numberOfLines={props.numberOfLines}
        ellipsizeMode="tail">
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    //width: Dimensions.get('window').width * 0.9,
   
  },
  textContainer: {
    fontSize: 15,
    color: '#2A2D2D',
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default screen;

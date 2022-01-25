import React from 'react';
import {useState, useEffect} from 'react';
import Text from '../Global/infoText';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function component(props) {
  return (
    <View
      style={[{flexDirection: 'row', justifyContent: 'center'}, props.style]}>
      <Text text={props.simpleText} style={styles.textContainer} />
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <Text
          text={"  "+props.touchableText}
          style={[styles.textContainer, {color: '#186BFE'}]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({textContainer: {paddingHorizontal: 0}});

export default component;

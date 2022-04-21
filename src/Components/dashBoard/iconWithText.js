import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoText from '../Global/infoText';
import {useNavigation} from '@react-navigation/native';

export default function IconWithText({icon, text,onPress}) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => onPress(icon)}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#2A2D2D',
          borderRadius: 10,
          width: 100,
          height: 100,
        }}>
        <Icon name={icon} size={50} color="#2A2D2D" />
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <InfoText text={text} style={{textAlign: 'center'}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

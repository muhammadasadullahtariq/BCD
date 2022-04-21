import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

function ImageView({route, navigation}) {
  const {imageUrl} = route.params;
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: imageUrl}}
        style={styles.imageContainer}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ImageView;

import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet,TouchableOpacity} from 'react-native';
import InfoText from '../Global/infoText';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';

export default function (props) {
  const [imageUrl, setImageUrl] = React.useState('');
  //const [imageRef, setImageRef] = React.useState('');
  const Navigation = useNavigation();
  storage()
    .ref('/userData/' + auth().currentUser.uid + `/images/` + props.data.name)
    .getDownloadURL()
    .then(url => {
      setImageUrl(url);
    });

  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => Navigation.navigate('ImageView', {imageUrl: imageUrl})}>
      <View
        style={{
          height: 90,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.mainContainer}>
          <Image style={styles.imageContainer} source={{uri: imageUrl}} />
          <View style={{alignItems: 'flex-start'}}>
            <InfoText
              text={props.data.name}
              numberOfLines={1}
              style={{marginBottom: 10, fontSize: 20, width: '90%'}}
            />
            <InfoText text={props.data.date} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 80,
    width: '98%',
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2A2D2D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#2A2D2D',
    marginLeft: 10,
  },
});

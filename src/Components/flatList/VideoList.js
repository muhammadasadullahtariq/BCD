import React, {useEffect, useRef, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import InfoText from '../Global/infoText';
import fireStorage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';

export default function (props) {
  var player = useRef();
  const [videoUrl, setVideoUrl] = useState('');
  const Navigation = useNavigation();

  fireStorage()
    .ref('/userData/' + auth().currentUser.uid + '/videos/' + props.data.name)
    .getDownloadURL()
    .then(function (url) {
      setVideoUrl(url);
    });

  useEffect(() => {
    console.log(props.data.date);
  }, []);
  return (
    <TouchableOpacity
      onPress={() => Navigation.navigate('VideoPlayer', {videoUrl: videoUrl})}>
      <View
        style={{
          height: 500,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.mainContainer}>
          <Video
            source={{
              uri: videoUrl,
            }}
            ref={ref => {
              player = ref;
            }}
            style={styles.backgroundVideo}
            controls={true}
            fullscreenOrientation="landscape"
            resizeMode="contain"
            paused={true}
            volume={0.5}
          />
          <View style={{alignItems: 'flex-start', marginTop: 10}}>
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
    width: '98%',
    borderRadius: 10,
    backgroundColor: 'white',
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
    marginBottom: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#2A2D2D',
    marginLeft: 10,
  },
  backgroundVideo: {
    height: 300,
    width: '100%',
  },
});

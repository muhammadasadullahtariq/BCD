import Video from 'react-native-video';
import {StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import fireStorage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

function VideoPlayer({route, navigation}) {
  var player = useRef();
  const {videoUrl} = route.params;
  
 
  return (
    <Video
      source={{
        uri: videoUrl,
      }} // Can be a URL or a local file.
      ref={ref => {
        player = ref;
      }} 
      style={styles.backgroundVideo}
      controls={true}
      fullscreenOrientation="landscape"
      resizeMode="contain"
    />
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayer;

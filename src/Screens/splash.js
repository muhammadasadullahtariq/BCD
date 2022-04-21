// import React, {useState, useEffect} from 'react';
// import {StyleSheet, View} from 'react-native';

// const screen = () => {
//   return <View style={styles.mainContainer}></View>;
// };

// const styles = StyleSheet.create({mainContainer: {}});

// export default screen;

import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import imageSource from '../Asserts/splashImage.png';
import Orientation from 'react-native-orientation';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const screen = ({navigation, route}) => {
  let userFlag = false;
  //var userDataGetFlag = false;
  let role = -5;
  const [screenTime, setScreenTime] = useState(3);
  const [timeFinish, setTimeFinish] = useState(false);
  let interval;

  function timerForotp() {
    interval = setInterval(() => {
      setScreenTime(s => {
        if (s == 1) {
          clearInterval(interval);
          setTimeFinish(true);
          console.log(userFlag);
        }
        return s - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    //Orientation.lockToPortrait();
    //auth().signOut();
    if (!timeFinish) timerForotp();
    else {

      if (auth().currentUser != null) {
        navigation.reset;
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Home'}],
          }),
        );
      } else {
        navigation.reset;
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      }
    }
  }, [timeFinish]);

  return (
    <View style={styles.mainContainer}>
      <Image source={imageSource} style={styles.imageContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2A2D2D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {width: '80%', height: 400, aspectRatio: 1},
});

export default screen;

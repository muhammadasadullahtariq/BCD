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

const screen = ({navigation, route}) => {
  let userFlag = false;
  //var userDataGetFlag = false;
  let role = -5;
  const [screenTime, setScreenTime] = useState(3);
  const [timeFinish, setTimeFinish] = useState(false);
  let interval;
  async function getUserDetail() {
    //console.log('i called');
    global.clearSkipArr = true;
    try {
      auth().onAuthStateChanged(async user => {
        if (user) {
          console.log('here am i', user.phoneNumber);
          let resultUserExist = await checkUserExist(user.phoneNumber);
          console.log('result of user:', resultUserExist);
          //console.log(resultUserExist);
          if (resultUserExist == 'User not found') {
            userFlag = false;
            role = -5;
            userDataGetFlag = true;
          } else {
            global.id = resultUserExist.data._id;
            userFlag = true;
            role = resultUserExist.data.role;
            userDataGetFlag = true;
          }
        } else {
          userFlag = false;
          userDataGetFlag = true;
        }
      });
      // auth().onAuthStateChanged(async user => {

      // });
    } catch (err) {
      console.warn('error', err);
      userDataGetFlag = true;
    }
  }

  function navigateToOtherScreen() {
    if (userFlag) {
      navigation.reset;
      if (role == 1) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'PublicUser'}],
          }),
        );
        // navigation.reset({
        //   index: 0, //the stack index
        //   routes: [
        //     {
        //       name: 'PublicUser',
        //     }, //Public User Home Screen
        //   ],
        // });
      } else if (role == 2) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'WasteCollectorMainMenu'}],
          }),
        );
      } else if (role == 3) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'TraderMainMenu'}],
          }),
        );
      } else if (role == 4) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            //SupplierMainMenu
            routes: [{name: 'SupplierMainMenu'}],
          }),
        );
      }
    } else {
      //navigation.setParams({role});
      //console.warn('role', role);
      navigation.reset({
        index: 0,
        routes: [{name: 'Test'}],
      });
    }
  }

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
    if (!timeFinish) timerForotp();
    else {
      navigation.reset;
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Login'}],
        }),
      );
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

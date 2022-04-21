import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import InputComponent from '../Components/Global/inputComponentWithIcon';
import imageSource from '../Asserts/splashImage.png';
import Button from '../Components/Global/buttonComponent';
import TouchableText from '../Components/UserAuth/touchAbleText';
import {CommonActions} from '@react-navigation/native';
import {validateEmail} from '../Functions/validateEmail';
import WaitingAlert from '../Components/Global/waitingAlertComponent';
import SingleButtonAlert from '../Components/Global/singleButtonAlert';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//mail//user//lock
function screen({navigation, route}) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [alertText, setAlertText] = useState('Please Enter Name');
  const [alertFlag, setAlertFlag] = useState(false);
  const [waitingAlertFlag, setWaitingAlertFalg] = useState(false);

  function mailHandler(mail) {
    setMail(mail);
  }

  function passwordHandler(pass) {
    setPassword(pass);
  }

  function userNameHandler(name) {
    setUserName(name);
  }

  function userDataHandler() {
    firestore()
      .collection('usersPersonalData')
      .doc(auth().currentUser.uid)
      .set({flightTime: 0, flights: 0, images: [], name: userName, videos: []})
      .then(() => {
        setWaitingAlertFalg(false);
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
            },
          ],
        });
      })
      .catch(err => {
        setAlertFlag(true);
        setAlertText(err.message);
      });
  }

  function signUpHandler() {
    setWaitingAlertFalg(true);
    if (validateEmail(mail));
    else {
      setWaitingAlertFalg(false);
      setAlertText('Please Enter Valid Email');
      setAlertFlag(true);
      return;
    }
    if (password.length < 6) {
      setWaitingAlertFalg(true);
      setAlertText('Password length must of 6');
      setAlertFlag(true);
      return;
    }
    if (userName.length < 4) {
      setWaitingAlertFalg(true);
      setAlertText('User Name length must of 4');
      setAlertFlag(true);
      return;
    }

    auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(res => {
        res.user.updateProfile({displayName: userName});
        userDataHandler();
      })
      .catch(error => {
        setWaitingAlertFalg(false);
        if (error.code == 'auth/email-already-in-use') {
          setAlertText('That email address is already in use!');
          setAlertFlag(true);
        } else if (error.code == 'auth/invalid-email') {
          setAlertText('That email address is invalid!');
          setAlertFlag(true);
        } else {
          setWaitingAlertFalg(false);
          setAlertText('Unable to Sign Up');
          setAlertFlag(true);
        }
      });
  }

  useEffect(() => {}, []);
  return (
    <View>
      <SingleButtonAlert
        text={alertText}
        visible={alertFlag}
        onPress={() => setAlertFlag(false)}
      />
      <WaitingAlert visible={waitingAlertFlag} />
      <Image source={imageSource} style={{alignSelf: 'center'}} />
      <InputComponent
        icon={'user'}
        placeHolder={'Enter user name'}
        textHandler={userNameHandler}
        text={userName}
      />
      <InputComponent
        icon={'mail'}
        placeHolder={'Enter email'}
        textHandler={mailHandler}
        text={mail}
      />
      <InputComponent
        icon={'lock'}
        placeHolder={'Enter password'}
        textHandler={passwordHandler}
        password={true}
        text={password}
      />
      <Button
        text={'Sign up'}
        style={{marginTop: 20}}
        onPress={signUpHandler}
      />
      <TouchableText
        simpleText={'Already have account'}
        touchableText={'Sign in'}
        style={{marginTop: '10%'}}
        onPress={() => {
          navigation.reset;
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }),
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default screen;

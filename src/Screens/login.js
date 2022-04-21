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

//mail//user//lock
function screen({navigation, route}) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [alertText, setAlertText] = useState('Please Enter Name');
  const [alertFlag, setAlertFlag] = useState(false);
  const [waitingAlertFlag, setWaitingAlertFalg] = useState(false);

  function mailHandler(mail) {
    setMail(mail);
  }

  function passwordHandler(pass) {
    setPassword(pass);
  }

  function signInHandler() {
    setWaitingAlertFalg(true);
    if (validateEmail(mail));
    else {
      setWaitingAlertFalg(false);
      setAlertText('Please Enter Valid Email');
      setAlertFlag(true);
      return;
    }
    if (password.length < 6) {
      setWaitingAlertFalg(false);
      setAlertText('Password length must of 6');
      setAlertFlag(true);
      return;
    }

    auth()
      .signInWithEmailAndPassword(mail, password)
      .then(() => {
        setWaitingAlertFalg(false);
        // setAlertFlag(true);
        // setAlertText('User account created & signed in!');
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
            },
          ],
        })
        //navigation.navigate('Home');
      })
      .catch(error => {
        setWaitingAlertFalg(false);
        if (error.code === 'auth/email-already-in-use') {
          setAlertFlag(true);
          setAlertText('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setAlertFlag(true);
          setAlertText('That email address is invalid!');
        }

        setAlertFlag(true);
        setAlertText('Unable to login, Please try Again!');
        console.error(error);
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
        text={'Sign in'}
        style={{marginTop: 20}}
        onPress={signInHandler}
      />
      <TouchableText
        simpleText={'Not have account '}
        touchableText={'Sign up'}
        style={{marginTop: '10%'}}
        onPress={() => {
          navigation.reset;
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Signup'}],
            }),
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default screen;

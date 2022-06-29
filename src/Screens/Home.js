import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import imageSource from '../Asserts/splashImage.png';
import InfoText from '../Components/Global/infoText';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconWithText from '../Components/dashBoard/iconWithText';
import firestore from '@react-native-firebase/firestore';
import EditIcon from 'react-native-vector-icons/FontAwesome5';

const screen = ({navigation, route}) => {
  const [menuArr, setMenuArr] = useState([
    {icon: 'ios-camera-outline', text: '0'},
    {icon: 'ios-videocam-outline', text: '0'},
    {icon: 'ios-person-outline', text: '0'},
    {icon: 'ios-notifications-outline', text: '0'},
  ]);
  const [userName, setUserName] = useState('');
  const [videoList, setVideoList] = useState([]);
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    console.log(auth().currentUser.uid);
    firestore()
      .collection('usersPersonalData')
      .doc(auth().currentUser.uid)
      .onSnapshot(onResult, onError);
  }, []);

  const onResult = data => {
    console.log(data);
    if (data.name == undefined) {
      data = data._data;
    }
    console.log(data);
    setUserName(data.name);
    setVideoList(data.videos);
    setImagesList(data.images);
    setMenuArr([
      {icon: 'ios-camera-outline', text: data.images.length},
      {icon: 'ios-videocam-outline', text: data.videos.length},
      {icon: 'rocket-outline', text: data.flights},
      {icon: 'ios-timer-outline', text: data.flightTime},
    ]);
  };

  const onError = error => {
    console.log(error);
  };

  const logoutHandler = () => {
    auth().signOut();
    navigation.reset;
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };

  const onPressHandler = iconName => {
    if (iconName == 'ios-videocam-outline') {
      navigation.navigate('VideoList', {
        data: videoList,
      });
    } else if (iconName == 'ios-camera-outline') {
      navigation.navigate('ImageList', {
        data: imagesList,
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dashBoardContainer}>
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={logoutHandler}>
            <Icon name="log-out-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.userDetailContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={imageSource} style={styles.imageContainer} />
            <InfoText text={userName} style={{color: 'white'}} />
          </View>
          <View style={{marginRight: 20}}>
            <EditIcon name="user-edit" color={'white'} size={30} />
          </View>
        </View>
      </View>
      <FlatList
        numColumns={2}
        style={{width: '100%'}}
        data={menuArr}
        columnWrapperStyle={{
          marginVertical: 20,
          justifyContent: 'space-evenly',
        }}
        renderItem={items => (
          <IconWithText
            icon={items.item.icon}
            text={items.item.text}
            onPress={onPressHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
  },
  imageContainer: {
    borderRadius: 100,
    height: 60,
    width: 60,
    aspectRatio: 1,
  },
  dashBoardContainer: {
    width: '95%',
    height: '15%',
    backgroundColor: 'white',
    backgroundColor: '#2A2D2D',
    borderRadius: 10,
  },
  logoutButtonContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  userDetailContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
});

export default screen;

import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../Screens/test';
import Splash from '../Screens/splash';
import Login from '../Screens/login';
import Signup from '../Screens/signup';
import HomeScreen from '../Screens/home';
import VideoList from '../Screens/videoList';
import ImageList from '../Screens/imageList';
import VideoPlayer from '../Screens/videoPlayer';
import ImageView from '../Screens/imageView';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <View style={{backgroundColor: '#2A2D2D', height: 40}}>
        <StatusBar
          // hidden={false}
          // translucent={true}
          barStyle="light-content"
        />
      </View>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#2A2D2D'},
          headerTitleStyle: {
            textAlign: 'center',
            color: 'white',
          },
          headerTintColor: 'white',
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Sign in'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Register user'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Dash Board', headerShown: false}}
        />
        <Stack.Screen
          name="VideoList"
          component={VideoList}
          options={{title: 'Videos List'}}
        />
        <Stack.Screen
          name="ImageList"
          component={ImageList}
          options={{title: 'Images List'}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{title: 'Video Player', headerShown: false}}
        />
        <Stack.Screen
          name="ImageView"
          component={ImageView}
          options={{title: 'Image View', headerShown: false}}
        />
        {/* <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

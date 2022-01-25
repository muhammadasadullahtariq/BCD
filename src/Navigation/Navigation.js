import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../Screens/test';
import Splash from '../Screens/splash';
import Login from '../Screens/login';
import Signup from '../Screens/signup';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={true} />
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
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

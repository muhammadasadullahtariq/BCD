import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/Navigation/Navigation';
import {LogBox} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function App() {
  useEffect(() => {}, []);

  return <Navigation />;
}

const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/Navigation/Navigation';
import {LogBox} from 'react-native';

export default function App() {
  useEffect(async () => {
    LogBox.ignoreAllLogs(true);
  });
  return <Navigation />;
}

const styles = StyleSheet.create({});

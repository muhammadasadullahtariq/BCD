import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ImageList from '../Components/flatList/ImageList';

export default function Screen({navigation, route}) {
  const [data, setData] = useState(route.params.data);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ImageList data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 10},
});

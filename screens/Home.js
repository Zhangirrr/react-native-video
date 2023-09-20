import React, {useState, useContext} from 'react';
import AppContext from '../components/AppContext/AppContext';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const Home = ({navigation}) => {
  const $ = useContext(AppContext);

  const videoList = [
    {
      id: 1,
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'First Video',
      time: '4',
    },
    {
      id: 2,
      url: 'https://www.shutterstock.com/shutterstock/videos/1060693540/preview/stock-footage-two-american-wolfes-playing-in-the-snow.webm',
      title: 'Second Video',
      time: '5',
    },
    {
      id: 3,
      url: 'https://www.shutterstock.com/shutterstock/videos/1103576855/preview/stock-footage-young-blonde-girl-in-a-white-t-shirt-waiting-for-someone-palace-of-the-parliament-in-the.webm', 
      title: 'Third Video',
      time: '4',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={videoList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('video', {
            urlToVideo: item.url,
          })}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
        }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#cfcaca'
  },
  item: {
    backgroundColor: '#474545',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 30,
    color: 'white'
  },
  title: {
    fontSize: 32,
  },
});
export default Home;

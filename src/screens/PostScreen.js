import React,{useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import firebase, { Post } from '../components/firebase';
import CircleButton from '../elements/CircleButton';

function PostScreen() {
  const [title, setTitle] = useState('');
  const db = firebase.firestore();
  db.collection('users/')
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.postInput}
        multiline
        value={title}
        onChangeText={setTitle}
      />
      <CircleButton
        onPress={() => {
          Post(title)
        }}>
        send
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  postInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default PostScreen;

import React,{useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

function PostScreen() {
  const [title, setTitle] = useState('');
 
  function handlePress() {
    const db = firebase.firestore();
    const {currentUser}=firebase.auth();
    db.collection(`users/${currentUser.uid}/posts`).add({
      body: "あいうえお",
      createdOn: "new Date()",
    })
    .then((docRef)=>{
      console.log(docRef.id);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
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
          {handlePress()}
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

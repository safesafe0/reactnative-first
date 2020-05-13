import React,{useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {post} from '../components/firebase';
import CircleButton from '../elements/CircleButton';
// `users/${currentUser.uid}/posts`
function PostScreen() {
  const [title, setTitle] = useState('');
 
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
          post(title);
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

import React,{useState,useEffect} from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';
window.addEventListener = (x) => x;
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

function TimeLineScreen (props){
  const[postList,setpostList]=useState();

  // useEffect(()=>{
  //   const db =firebase.firestore();
  //   const postsRef=db.collection('posts');
  //   const postsSortedByCreatedOnRef=postsRef.orderBy('createdOn');
  //   postsSortedByCreatedOnRef
  //   .get()
  //   .then(function(querySnapshot){
  //     const postList=[];
  //     querySnapshot.foreach(function(queryDocSnapshot){
  //       postList.push(doc.data());
  //     });
  //     setpostList({postList});
  //     console.log(snapshot);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // });

  return (
    <View style={styles.container}>
      <MemoList memoList={postList}navigation={props.navigation}/>
      <CircleButton onPress={() => {firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is loged in.
    props.navigation.navigate('Post')
  } else {
    // No user is loged in.
    props.navigation.navigate('Signin')
  }
});}}>add-circle</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
});
export default TimeLineScreen;
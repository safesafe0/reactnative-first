import React,{useState} from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

function TimeLineScreen (props){
  const[postList,setpostList]=useState();
  function componentDidMount(){
    const {currentUser}=firebase.auth();
    const db =firebase.firestore();
    db.collection(`users/${currentUser}/posts`)
      .get()
      .then((snapshot)=>{
        const postList=[];
        snapshot.forEach((doc)=>{
          postList.push(doc.data());
        });
        setpostList({postList});
        // console.log(snapshot);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  return (
    <View style={styles.container}>
      <MemoList memoList={postList}onPress={()=>props.navigation.navigation('Detail')}/>
      <CircleButton onPress={() => {firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    props.navigation.navigate('Post')
  } else {
    // No user is signed in.
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
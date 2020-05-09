import firebase from 'firebase';
import EMV from '../../env.json';
import {useNavigation} from '@react-navigation/native';
require("firebase/firestore");

// Firebase 初期化
const config = {
  apiKey: EMV.FIREBASE_API_KEY,
  authDomain: EMV.FIREBASE_AUTH_DOMAIN,
  databaseURL: EMV.FIREBASE_DB_URL,
  projectId: EMV.FIREBASE_PRJ_ID,
  storageBucket: EMV.FIREBASE_STORAGE,
  messagingSenderId: EMV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

// ユーザ登録
export function signup  (email, password)  {
  const navigation =useNavigation();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('Success to Signup');
      navigation.navigate('Home');
      alert("ユーザー登録が完了しました!");
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
};

// メール＆パスワードログイン
export function login  (email, password)  {
  const navigation =useNavigation();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      navigation.navigate('Home',{currentUsr:user});
      alert('Login Success!');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export function Post (title){
  const db = firebase.firestore();
  const user =1;
  db.collection(`users/${user}/posts`).add({
    body: title,
    createdOn: new Date(),
  })
  .then(()=>{

  })
  .catch((error)=>{

  })
    
};

export default firebase;

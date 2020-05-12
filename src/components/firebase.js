import firebase from 'firebase';
import EMV from '../../env.json';
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
export function signup  (email, password,{navigation})  {

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
export function login  (email, password,{navigation})  {

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      navigation.navigate('Home');
      alert('Login Success!');
    })
    .catch((error) => {
      alert(error.message);
    });
};

// タイムライン投稿
export function Post (title){
  const db = firebase.firestore();
  const {currentUser}=firebase.auth();
  db.collection(`users/${currentUser.uid}/posts`).add({
    body: title,
    createdOn: new Date(),
  })
  .then(()=>{
    console.log(docRef.id);
  })
  .catch((error)=>{
    console.log(error);
  })
};

export default firebase;

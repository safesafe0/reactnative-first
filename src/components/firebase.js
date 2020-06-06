window.addEventListener = (x) => x;
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import EMV from '../../env.json';
// require('firebase/firestore');

// Firebase 初期化
const firebaseConfig = {
  apiKey: EMV.FIREBASE_API_KEY,
  authDomain: EMV.FIREBASE_AUTH_DOMAIN,
  databaseURL: EMV.FIREBASE_DB_URL,
  projectId: EMV.FIREBASE_PRJ_ID,
  storageBucket: EMV.FIREBASE_STORAGE,
  messagingSenderId: EMV.FIREBASE_SENDER_ID,
  appId: EMV.FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);
// ユーザ登録
export function signup(email, password, {navigation}) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Success to Signup');
      navigation.navigate('Home');
      alert('ユーザー登録が完了しました!');
    })
    .catch(function (error) {
      alert(error.message);
      console.log(error);
    });
}

// メール＆パスワードログイン
export function login(email, password, {navigation}) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      navigation.navigate('Home');
      alert('Login Success!');
    })
    .catch(function (error) {
      alert(error.message);
    });
}

// タイムライン投稿
export async function post(title) {
  await firebase
    .firestore()
    .collection(`users/${u.id}/posts`)
    .add({
      body: title,
      createdOn: '2020-05-13',
    })
    .then(function (docRef) {
      console.log(docRef.id);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default firebase;

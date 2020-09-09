import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config={
    apiKey: "AIzaSyCP55X3yyf43_okmdhe_NT7n7-8AUhnnus",
    authDomain: "crown-db-886fb.firebaseapp.com",
    databaseURL: "https://crown-db-886fb.firebaseio.com",
    projectId: "crown-db-886fb",
    storageBucket: "crown-db-886fb.appspot.com",
    messagingSenderId: "49609691894",
    appId: "1:49609691894:web:a0b0d8573056e74f4d12d7",
    measurementId: "G-GKVJC78VD8"
  };
  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  export default firebase;
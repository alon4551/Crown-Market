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

  export const createUserProfile=async(userAuth,additnalData)=>{
    if(!userAuth)return;
    const userRef=firestore.doc(`/users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createAt=new Date();
      try{
        await userRef.set({
          displayName,email,createAt,...additnalData
        })
      }
      catch(err){
        console.log('Error catching user',err.message);
      }
    }
    return userRef;
      
  }
  export const addCollectionAndDocuments= async (collectionKey,objectToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectToAdd.forEach(obj => {
      const newDocRef=collectionRef.doc();
      batch.set(newDocRef,obj);
    });
    await batch.commit();
  }

  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore=firebase.firestore();
export const convertCollectionsSnapshopToMap=collections=>{
  const transformCollections=collections.docs.map(doc=>{
    const {title,items} =doc.data();
    return{
      title,
      items,
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id
    }
  });
  return transformCollections.reduce((acc,item)=>{
    acc[item.title.toLowerCase()]=item;
    return acc;
  },{})
}
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  export default firebase;
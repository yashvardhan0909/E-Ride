import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmUcSq9seWlvA4VtR7DL-QLXYRxLOAFSY",
    authDomain: "e-ride-2cc82.firebaseapp.com",
    projectId: "e-ride-2cc82",
    storageBucket: "e-ride-2cc82.appspot.com",
    messagingSenderId: "536616966149",
    appId: "1:536616966149:web:a065263dd580f668ec246c"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()

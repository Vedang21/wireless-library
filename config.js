import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDhyjMUWqmc9gnGIc-qyWK9H3ZjrVbH4YA",
  authDomain: "wireless-library-8bab1.firebaseapp.com",
  databaseURL: "https://wireless-library-8bab1.firebaseio.com",
  projectId: "wireless-library-8bab1",
  storageBucket: "wireless-library-8bab1.appspot.com",
  messagingSenderId: "357886511388",
  appId: "1:357886511388:web:bf54d1a8f97e53003fd2d9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
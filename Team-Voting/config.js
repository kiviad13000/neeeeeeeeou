import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBvtkbAlXHBPSVr9xiku7v8UWeca0F6kZs",
    authDomain: "project-67-76820.firebaseapp.com",
    projectId: "project-67-76820",
    storageBucket: "project-67-76820.appspot.com",
    messagingSenderId: "1075911082375",
    appId: "1:1075911082375:web:baae76a8aaf4718af15322"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
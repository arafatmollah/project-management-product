import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBUszEHGk6TfYIL2dCcczbwhuOv_BEeNDM",
    authDomain: "final-project-fb6f2.firebaseapp.com",
    projectId: "final-project-fb6f2",
    storageBucket: "final-project-fb6f2.appspot.com",
    messagingSenderId: "676150180129",
    appId: "1:676150180129:web:e00d1126ec9860742e2660"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  //storage
  const projectStorage = firebase.storage()

  export {projectFirestore, projectAuth, projectStorage, timestamp}

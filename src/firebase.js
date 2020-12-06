import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOQpV_cUW6hfsAv9K70gKx2SzsE0rK6Rk",
    authDomain: "clone-c4a19.firebaseapp.com",
    projectId: "clone-c4a19",
    storageBucket: "clone-c4a19.appspot.com",
    messagingSenderId: "164615834087",
    appId: "1:164615834087:web:f45b0e918aa4da1dced542",
    measurementId: "G-J1K2ZM6KY5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };
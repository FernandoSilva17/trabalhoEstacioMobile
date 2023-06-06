// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEIJwmF1n7NLrdwEdylQpe3YRs6oYjwXQ",
  authDomain: "estacio-mobile-1e329.firebaseapp.com",
  projectId: "estacio-mobile-1e329",
  storageBucket: "estacio-mobile-1e329.appspot.com",
  messagingSenderId: "718798069490",
  appId: "1:718798069490:web:a10a50ceec6bcd8e4a7a6b",
  measurementId: "G-X2B2KMH7VB"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
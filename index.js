/**
 * @format
 */
 import 'react-native-gesture-handler';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import firebase from '@react-native-firebase/app';
 import 'firebase/firestore';
 import {GoogleSignin} from '@react-native-google-signin/google-signin';
 
 const firebaseConfig = {
    apiKey: "AIzaSyA6QlWEAHk3Al1eF2vu7jt7tIH2yc3FSNQ",
    authDomain: "jordans-5e814.firebaseapp.com",
    projectId: "jordans-5e814",
    storageBucket: "jordans-5e814.appspot.com",
    messagingSenderId: "740468214232",
    appId: "1:740468214232:web:b5f2700edc12cbdabf0aad"
  };
 
 if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
 }
 
 GoogleSignin.configure({
   scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
   webClientId:
     '740468214232-s48qtnv91v4lo1ivoq0jk3s7j50f8od4.apps.googleusercontent.com',
 });
 
 AppRegistry.registerComponent(appName, () => App);

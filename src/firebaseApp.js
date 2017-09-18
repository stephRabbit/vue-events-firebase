import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCZNOqYxM_fZKKHxqBpuvn8w4YvYwqTCOA",
  authDomain: "events-f619b.firebaseapp.com",
  databaseURL: "https://events-f619b.firebaseio.com",
  projectId: "events-f619b",
  storageBucket: "events-f619b.appspot.com",
  messagingSenderId: "691900025544"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');

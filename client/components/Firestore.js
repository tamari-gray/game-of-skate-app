import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDJPLpk_Y1eqwJR3C_U5Aq3MWI8rXWFO5g",
  authDomain: "game-of-skate-app.firebaseapp.com",
  databaseURL: "https://game-of-skate-app.firebaseio.com",
  projectId: "game-of-skate-app",
  storageBucket: "game-of-skate-app.appspot.com",
  messagingSenderId: "758441157449",
  appId: "1:758441157449:web:8ccb4911c29fd15b"
}

firebase.initializeApp(firebaseConfig)

export default firebase
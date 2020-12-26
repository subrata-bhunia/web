import XXX from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyBCVCM2xC1f9Hk7hXzruIDHqf4xTadeKLU",
  authDomain: "react-firebasetest.firebaseapp.com",
  databaseURL: "https://react-firebasetest.firebaseio.com",
  projectId: "react-firebasetest",
  storageBucket: "react-firebasetest.appspot.com",
  messagingSenderId: "191725128553",
  appId: "1:191725128553:web:6e66c0691c082cd52fcbf8",
 measurementId: "G-GHV7H465W8"
};

if( XXX.apps.length === 0 ){
let app= XXX.initializeApp(firebaseConfig);
var appd=app;

}
const db=appd.database();

export default db;
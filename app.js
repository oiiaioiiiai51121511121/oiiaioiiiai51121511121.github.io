const firebaseConfig = {
    apiKey: "AIzaSyAYkRIeFVnvqQ-epYMM2HeZ2yaXFvcZR9Q",
    authDomain: "ee3070-c2c77.firebaseapp.com",
    databaseURL: "https://ee3070-c2c77-default-rtdb.firebaseio.com",
    projectId: "ee3070-c2c77",
    storageBucket: "ee3070-c2c77.firebasestorage.app",
    messagingSenderId: "578057381631",
    appId: "1:578057381631:web:301014aebf389e4c264eca",
    measurementId: "G-TPE9ZH17VG"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
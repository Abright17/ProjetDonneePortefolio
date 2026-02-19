// firebase.js (compatible avec les scripts v8 dans index.html)

const firebaseConfig = {
  apiKey: "AIzaSyDBpdvS4TAfcH14xE0nXBufoYL64M2oFRM",
  authDomain: "cinema-79f34.firebaseapp.com",
  projectId: "cinema-79f34",
  storageBucket: "cinema-79f34.firebasestorage.app",
  messagingSenderId: "46882930982",
  appId: "1:46882930982:web:072d37afdeb303032f81e7",
  measurementId: "G-TKHPQR3WZ8"
};

// Initialise Firebase (v8)
firebase.initializeApp(firebaseConfig);

// Expose Firestore en variable globale (pour Application.js et tes DAO)
window.db = firebase.firestore();

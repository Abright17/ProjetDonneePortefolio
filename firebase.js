<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC4JFsaC9u6GrZviVQv0a8Sc8mdhOEiGmM",
    authDomain: "cinema-cd5d1.firebaseapp.com",
    projectId: "cinema-cd5d1",
    storageBucket: "cinema-cd5d1.firebasestorage.app",
    messagingSenderId: "341728235675",
    appId: "1:341728235675:web:6512d3e9b9bc0be09b363e",
    measurementId: "G-H5NZWXEHD3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

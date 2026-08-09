import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyBG6oid29bMq8GVvBkNvPtSDZTRO5K09uk',
  authDomain: 'focus-game-1c7ee.firebaseapp.com',
  databaseURL: 'https://focus-game-1c7ee-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'focus-game-1c7ee',
  storageBucket: 'focus-game-1c7ee.firebasestorage.app',
  messagingSenderId: '856695121197',
  appId: '1:856695121197:web:6deb5f59319a3ff8499fa4'
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

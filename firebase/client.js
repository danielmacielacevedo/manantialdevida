import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAz66xEzY8OyOBgtwZ1l77SH1AA83W0Fi8",
  authDomain: "somosmanantialapp.firebaseapp.com",
  projectId: "somosmanantialapp",
  storageBucket: "somosmanantialapp.appspot.com",
  messagingSenderId: "44951684744",
  appId: "1:44951684744:web:e700420475b857f169813d",
  measurementId: "G-728J7XXSDC"
};

// Verifica si ya hay una instancia de la aplicación
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  if (!user) {
    return null;
  }

  const { displayName, email, uid, photoURL } = user;

  return {
    name: displayName,
    email,
    id: uid,
    picture: photoURL,
  };
};

export const onAuthStateChanged = (onChange) => {
  firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export default firebase;

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8pw41nHJLuC7xRbvgcuvdVUlrvlds-34",
  authDomain: "mastermind-clothing-db.firebaseapp.com",
  projectId: "mastermind-clothing-db",
  storageBucket: "mastermind-clothing-db.appspot.com",
  messagingSenderId: "496399037832",
  appId: "1:496399037832:web:198ec56d85b0c06784b63d"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {

    const { displayName, email  } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }

    return userDocRef;
  } 

}
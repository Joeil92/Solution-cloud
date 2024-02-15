import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirebaseConfig } from './firebaseConfig';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const db = getFirestore(app);

export const createUser = async (
  email: string,
  password: string
) => {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUser = async (
  email: string,
  password: string
) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth);

export const addDatabase = async (dbName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, dbName), data);
    data.id = docRef.id

    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export const getDatabase = async (dbName: string) => {
  try {
    const docs = await getDocs(collection(db, dbName));
    const data = docs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
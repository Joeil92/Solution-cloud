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
import {
  QueryConstraint,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const createUser = async (
  email: string,
  password: string,
  role: string
) => {
  if (!email || !password || !role) return;

  return await createUserWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
      const user = userCredential.user;

      await addDatabase('role', { uid: user.uid, role: role });

      return userCredential;
    });
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

export const uploadFile = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `articles/${file.name}`)

  await uploadBytes(storageRef, file)

  const url = await getDownloadURL(storageRef);

  return url;
}

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

export const updateDatabase = async (dbName: string, data: any) => {
  const docRef = doc(db, dbName, data.id);

  try {
    await updateDoc(docRef, data);

    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export const removeDatabase = async (dbName: string, id: string) => {
  try {
    await deleteDoc(doc(db, dbName, id));

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export const getDoc = (dbName: string, uid: string) => doc(db, dbName, uid);

export const getDatabase = async (dbName: string) => {
  const q = query(collection(db, dbName));

  try {
    const docs = await getDocs(q);
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

export const getDatabaseByFilters = async (dbName: string, queryConstraints: QueryConstraint): Promise<any[]> => {
  const q = query(collection(db, dbName), queryConstraints);

  try {
    const docs = await getDocs(q);
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
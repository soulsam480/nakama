import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore/lite';

export function useDb() {
  const db = getFirestore();

  const chats = collection(db, 'chats');

  return {
    getChat: () => {},
  };
}

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
import { Chat } from 'src/types';

export function useChats() {
  const db = getFirestore();

  const chats = collection(db, 'chats');

  return {
    getChats: async (id: string) => {
      try {
        const q = query<Chat>(
          chats as any,
          where('from', '==', `users/${id}`),
          where('to', '==', `users/${id}`),
        );

        const snap = await getDocs<Chat>(q);

        const data: Chat[] = [];

        snap.forEach((doc) => data.push(doc.data()));

        return data;
      } catch (error) {
        throw error;
      }
    },
  };
}

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
import { User } from 'src/types';

export function useUsers() {
  const db = getFirestore();
  const users = collection(db, 'users');

  return {
    allUsers: async (id?: string) => {
      try {
        const q = query<User>(users as any, where('id', '!=', id));

        const snap = await getDocs<User>(q);

        const data: User[] = [];

        snap.forEach((doc) => data.push(doc.data()));

        return data;
      } catch (error) {
        throw error;
      }
    },

    findUser: async (gid: string) => {
      try {
        const ref = doc(users, gid);

        const snap = await getDoc(ref);

        return snap.exists();
      } catch (error) {
        throw error;
      }
    },

    addUser: async (gid: string, user: User) => {
      try {
        const ref = doc<User>(users as any, gid);

        return await setDoc<User>(ref, { ...user });
      } catch (error) {
        throw error;
      }
    },
  };
}

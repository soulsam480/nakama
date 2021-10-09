import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User as FAUser,
  signOut,
} from 'firebase/auth';
import { computed, ref } from 'vue';
import { app } from 'src/db/init';
import { User } from 'src/types';
import router from 'src/router';

const auth = getAuth(app);
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

function getUserVal(user: FAUser | null): User | null {
  if (!user) return null;

  const { email, uid, photoURL, displayName } = user;
  return {
    email: email as string,
    id: uid as string,
    image: photoURL as string,
    name: displayName as string,
  };
}

//state
const user = ref(getUserVal(auth.currentUser));
auth.onIdTokenChanged((authUser) => {
  user.value = getUserVal(authUser);

  router.push('/home');
});

export function useAuth() {
  return {
    googleSignin: async (): Promise<User> => {
      try {
        const {
          user: { email, displayName, uid, photoURL },
        } = await signInWithPopup(auth, provider);

        return {
          email: email as string,
          id: uid,
          name: displayName as string,
          image: photoURL as string,
        };
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        throw {
          errorCode,
          errorMessage,
          email,
          credential,
        };
      }
    },
    logout: async () => {
      try {
        await signOut(auth);
      } catch (error) {
        throw error;
      }
    },
    user,
    isLoggedIn: computed(() => !!user.value),
  };
}

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from 'src/db/init';

export function useAuth() {
  const auth = getAuth(app);
  auth.useDeviceLanguage();

  const provider = new GoogleAuthProvider();

  provider.addScope('profile');
  provider.addScope('email');

  return {
    googleSignin: async () => {
      try {
        const res = await signInWithPopup(auth, provider);

        return res;
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        throw {
          errorCode,
          errorMessage,
          email,
          credential,
        };
      }
    },
  };
}

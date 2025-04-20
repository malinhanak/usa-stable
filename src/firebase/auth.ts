import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const listenToAuthChanges = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

export const updateUserProfileDisplayName = (displayName: string) => {
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName,
    })
      .then(() => {
        console.log("done!");
      })
      .catch((error: Error) => {
        console.error("error", error);
      });
  }
};

export default auth;

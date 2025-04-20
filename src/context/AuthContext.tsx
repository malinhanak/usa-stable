import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import {
  login as firebaseLogin,
  logout as firebaseLogout,
  listenToAuthChanges,
  updateUserProfileDisplayName,
} from "../firebase/auth";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateDisplayName: (displayName: string) => Promise<void>;
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await firebaseLogin(email, password);
  };

  const logout = async () => {
    await firebaseLogout();
  };
  const updateDisplayName = async (displayName: string) => {
    await updateUserProfileDisplayName(displayName);
  };

  const isLoggedIn = !!user;

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoggedIn,
    updateDisplayName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

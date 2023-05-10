import { useRouter, useSegments } from 'expo-router';
import {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext({});


const AuthContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{
      // authToken,
      // updateAuthToken
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);

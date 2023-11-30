import axios from '@/api/axios';
import { auth } from '@/firebase/firebase.config';
import { User } from '@/types/types';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextValues = {
  user: User | null;
};

const AuthContext = createContext<AuthContextValues | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        try {
          const {
            data: { data },
          } = await axios.get(`/users/${currentUser.email}`);

          setUser(data);
        } catch (error) {
          setUser(null);
        }
      }

      setIsUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!isUserLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (authContext) {
    return authContext;
  }

  throw new Error('Something went wrong with AuthContext');
};

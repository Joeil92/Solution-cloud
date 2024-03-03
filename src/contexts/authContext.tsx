import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect, ReactNode } from "react";
import { SignOutUser, getDatabaseByFilters, userStateListener } from "@SC/services/firebase/firebase";
import { where } from "firebase/firestore";

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  role: null as string | null,
  setCurrentUser: (_user: User) => { },
  signOut: () => { }
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = userStateListener(async (user) => {
      if (user) {
        const role = await getDatabaseByFilters("role", where("uid", "==", user.uid));
       
        setRole(role[0].role);
        setCurrentUser(user);
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser,
    role,
    setCurrentUser,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
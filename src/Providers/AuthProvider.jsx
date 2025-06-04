import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const LoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const RegisterUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    };

    const UpdateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const SignOutUser = () => {
        return signOut(auth)
    }

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        RegisterUser,
        LoginUser,
        UpdateUser,
        SignOutUser,
        LoginWithGoogle
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
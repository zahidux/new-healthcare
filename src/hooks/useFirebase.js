import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Pages/Firebase/firebase.init";

const provider = new GoogleAuthProvider();

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signinGoogleProvider = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        isLoading,
        logOut,
        signinGoogleProvider
    }
}

export default useFirebase;
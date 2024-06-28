import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase.confic";


export const AuthContext = createContext();

const AuthProviderr = ({children}) => {
    const [user,setUser] = useState(null);
    const [isloading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user,
        isloading,
        createUser,
        loginUser
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth,(currentUser)=>{
           setLoading(false)
           setUser(currentUser)
           console.log(currentUser)
        })
        
        return()=>{
            return unSubscribed();
        }
    },[])
   return (
        <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
};

export default AuthProviderr;
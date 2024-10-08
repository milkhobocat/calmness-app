//this is authentication for login page
import React, { useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
//import stuff here for auth functions
import { signOut, createUserWithEmailAndPassword, currentUser, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, updateEmail, updatePassword  } from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password){
      return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}


function logout(){
    return signOut(auth)
}

function resetPassword(email){
    return sendPasswordResetEmail(auth, email)
}

function updateEmail(email){
    return updateEmail(currentUser, email)
}

function updatePassword(password){
    return  updatePassword(currentUser, password)
}

  useEffect(() =>{
     const unsubscribe =  onAuthStateChanged(auth, user =>{
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
  }, [])

    const value = {
        currentUser,
         login,
         signup,
         logout,
         resetPassword,
         updateEmail,
         updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
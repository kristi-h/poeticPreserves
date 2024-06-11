import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const UserContext = createContext(null)

export default function UserContextProvider ({ children }) {
    const [user, setUser ] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            } else {
                setUser(null)
            }
        },
        setError
       )
       return () => unsubscribe()
    }, [auth])

    return (
        <UserContext.Provider
          value={{ user, setUser, error }}
        >
            { children }
        </UserContext.Provider>
    )
}

export { UserContext }
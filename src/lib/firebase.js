import { 
    createUserWithEmailAndPassword,  
    signInWithEmailAndPassword 
} from "firebase/auth"
import {
    addDoc,
    collection
} from 'firebase/firestore'
import { auth, db } from '../firebase.config'

export function createAccount(user) {
    const { email, password } = user
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              resolve(userCredential)
              console.log(`account created for ${user.email}`)
            })
            .catch((error) => {
                reject(error)
                console.error(error.message)
            })
    })
}

export function loginAccount(user) {
    const { email, password } = user
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            resolve(userCredential)
            console.log("successfully logged in")
          })
          .catch((error) => {
              reject(error)
              console.error(error.message)
          })
    })
}
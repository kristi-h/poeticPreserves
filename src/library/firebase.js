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

// export function authSignInWithGoogle() {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log("Signed in with Google")
//         }).catch((error) => {
//             console.error(error.message)
//         })
// }

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         showSignedInView()
//         showAvatar(avatar, user)
//     } else {
//         showSignedOutView() 
//     }
// })

// export function authSignOut() {
//     signOut(auth)
//         .then(() => {
//             signout()
//         }).catch((error) => {
//             console.error(error.message)
//         })
// }

export async function addPoem(poem) {
    try {
        const docRef = await addDoc(collection(db, "poems"), {
          ...poem,
          date_added: Date.now(),
          userId: auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error(error.message);
      }
}

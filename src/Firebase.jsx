import { collection, addDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { 
        getAuth, 
        createUserWithEmailAndPassword,  
        signInWithEmailAndPassword 
} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

export const Firebase = () = [
    const firebaseConfig = {
        apiKey: "AIzaSyBevnpBBWnexT2K9k3B1s4YAQG2OvEu5ZA",
        authDomain: "poeticpreserves.firebaseapp.com",
        projectId: "poeticpreserves",
        storageBucket: "poeticpreserves.appspot.com",
        messagingSenderId: "314267636156",
        appId: "1:314267636156:web:2c5dac4824e8345fa95bb9",
        measurementId: "G-8S9YG2XN8L"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app)
    //   const analytics = getAnalytics(app);
      const db = getFirestore(app);
      console.log(auth)

    const [users, setUsers] = React.useState([])

    const [user, setUser] = React.useState({
      id: 0,
      email: "",
      password: "",
      isLoggedIn: false,
      poems: []
    })

    const [poem, setPoem] = React.useState({
        id: 0,
        title: "",
        author: "",
        date_added: Date.now(),
        entry: "",
        genre: "", 
        language: ""
    })

    function createAccount() {
      const email = user.email
      const password = user.password

      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setUsers(user => [
              ...users, 
              user.id
            ])
            console.log(`account created for ${user.email}`)
          })
          .catch((error) => {
              console.error(error.message)
          })
    }

    function loginAccount() {
      const email = user.email
      const password = user.password
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser( prev => ({
            ...prev,
            isLoggedIn: !prev.isLoggedIn
          }))
          console.log("successfully logged in")
        })
        .catch((error) => {
            console.error(error.message)
        })
    }

    async function addPoemToDB(poem) {
      try {
          const docRef = await addDoc(collection(db, "poems"), {
            title: poem.title,
            author: poem.author,
            date_added: Date.now(),
            entry: poem.entry,
            genre: poem.genre,
            keyword: poem.keyword, 
            language: poem.language
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error(error.message);
        }
    }
]
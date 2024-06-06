import React from 'react'
import AddEntry from '../components/AddEntry'
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

//firebase initialization
export default function Home(){
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
      const analytics = getAnalytics(app);
      const db = getFirestore(app);

    const [poem, setPoem] = React.useState({
        id: 0,
        title: "",
        author: "",
        date_added: Date.now(),
        entry: "",
        genre: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPoemToDB(poem)
            //clear the form
            e.target.reset() 
          } catch(e) {
            console.log(e)
          }
      } 
    
    async function addPoemToDB(poem) {
        try {
            const docRef = await addDoc(collection(db, "poems"), {
              title: poem.title,
              author: poem.author,
              date_added: Date.now(),
              entry: poem.entry,
              genre: poem.genre,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error(error.message);
          }
          
    }
  
    const onChangeHandler = (e) => {
        setPoem({
            ...poem,
            [e.target.name]: e.target.value 
        })
        console.log('poem', poem)
    }

    return(
        <div>
            <AddEntry 
                clickSubmit = {handleSubmit}
                onChangeHandler = {onChangeHandler}
                poem = {poem}
            />
        </div>
        
    )
}
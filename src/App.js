import firebase from 'firebase';
import {useState,useEffect} from 'react';

//To sign the google we are using the firebase
//to do authentication need to call authentication from the firebase assign to one variable
firebase.intializeApp({
  apiKey: "AIzaSyCkfD1-Cr0PyolmXVYoF1jRQlDfoYSAZGI",
  authDomain: "sign-project-9b511.firebaseapp.com",
  projectId: "sign-project-9b511",
  storageBucket: "sign-project-9b511.appspot.com",
  messagingSenderId: "574793241336",
  appId: "1:574793241336:web:d233e4d3ef4f5129c1610d",
  measurementId: "G-9XNJ08J4V8"
})


const auth = firebase.auth();

const App = () => {
  const [user,setUser] = useState(null);
useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person)
    }
    else{
      setUser(null)
    }
  })
})
const signInWithGoogle = async () =>{
  try{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
        <center>
          {user?
          <div>
           <h1>Welcome to home page </h1>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
          </div>
          :
          <button onClick={signInWithGoogle}>Sign In With Google</button>}
          
        </center>
    </div>
  )
}

export default App


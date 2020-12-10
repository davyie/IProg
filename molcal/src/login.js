const { useState, useEffect } = require("react");

import firebase from "firebase";
import React {useState, useEffect} from "react";

function login() {
const [user, setUser] = React.useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [existingAccount, setExistingAccount] = useState('false');

const clearInputs= () => {

    setEmail ('');
    setPassword ('');
}

const clearErrors= ()=> {
setEmailError ('');
setPasswordError ('');

}

const createLogin = () => {
    clearErrors();
firebase
.auth()
.signInWithEmailAndPassword(email.password)
.catch(err=>{
switch(err.code){case "auth/invalid-email":
case "auth/user-disabled": 
case "auth/user-not-found": 
setEmailError(err.message);
break;
case "auth/wrong-password":
    setPasswordError(err.message);
    break;


}

const createSignup = () => {
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email.password)
    .catch(err=>{
    switch(err.code){
    case "auth/email-already-in-use":
    case "auth/invalid-email": 
    setEmailError(err.message);
    break;
    case "auth/weak-password":
        setPasswordError(err.message);
        break;
    
    
    }

    const handlelogout = () => {
        firebase.auth ().signOut();
                
        };

const authlistener =() => {
firebase.auch().onAuthStateChanged(user=>{
if (user) {
    clearInputs();
    setUser(user);
}
else 
{
    setUser('');
}
});
};

useEffect (() => {
    authlistener();
},[]);




})



}






}
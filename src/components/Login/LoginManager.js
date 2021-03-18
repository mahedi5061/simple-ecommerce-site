import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const firebaseInitializeLogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }
   
}
export const handleGooglesignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const SignedIn = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success:true
            }
            return SignedIn;
        })

}
export const handleFbSignIn = () => {
    const FbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(FbProvider)
        .then((res) => {

            const user = res.user;
            user.success=true;
            return user;

        })
        .catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;

            var email = error.email;

            var credential = error.credential;


        });
}

export const handleGooglesignOut = () => {
   return firebase.auth().signOut()
        .then((res) => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photoURL: ''
            }
            return signOutUser;
        })

}


 export const createSignInAndPasswordHandler = (email,password) => {
   return firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((res) => {
            const userInfo =res.user;
            userInfo.success = true;
            userInfo.error = '';
            return userInfo;
        })
        .catch((error) => {
            const userInfo = {};
            userInfo.error = error.message;
            return userInfo;
        });
}
export const singInAndPasswordHandler = (email,password) => {
   return firebase.auth().signInWithEmailAndPassword(email,password)
        .then((res) => {
            const userInfo =res.user;
            userInfo.success = true;
            userInfo.error = '';
            return userInfo;
        })
        .catch((error) => {
            const userInfo = {};
            userInfo.error = error.message;
            userInfo.success=false;
             return userInfo;

        });
}

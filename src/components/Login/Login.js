import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import './Login.css';
import {createSignInAndPasswordHandler, firebaseInitializeLogIn, handleFbSignIn, handleGooglesignIn,handleGooglesignOut, singInAndPasswordHandler} from './LoginManager';
function Login() {
  
  
  const [newUser, setnewUser] = useState(false);
  const [login,setLogin]= useContext(userContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photoURL: '',
    error: '',
    success: false
  })
  firebaseInitializeLogIn();
  

  const history =useHistory();
  const location =useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
 
  const googleSignIn=()=>{
    handleGooglesignIn() 
    .then(res=>{
      setUser(res);
    setLogin(res);
    history.replace(from);
    })
   
  }

  const fbSignIn=()=>{
      handleFbSignIn() 
      .then(res=>{
        setUser(res);
      setLogin(res);
      history.replace(from);
      })
  }

  const googleSignOut=()=>{
    handleGooglesignOut() 
    .then(res=>{
      setUser(res);
      setLogin(res)
    })
  }
  const handleBlur = (e) => {
    let checkValidate = true;
    if (e.target.name === 'email') {
      checkValidate = /\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name === 'password') {
      const passwordValidation = e.target.value.length > 6;
      const passwordValidationNumber = /\d{1}/.test(e.target.value);
      checkValidate = passwordValidation && passwordValidationNumber
    }
    if (checkValidate) {
      const userInfo = { ...user };
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo)
    }
  }
  const submitHandler = (e) => {

    if (newUser && user.email && user.password) {
      createSignInAndPasswordHandler(user.email, user.password) 
     .then((res) =>{
      setUser(res);
      setLogin(res);
      history.replace(from);
     })
    }

    if (!newUser && user.email && user.password) {
     singInAndPasswordHandler(user.email, user.password)
     .then((res) =>{
      setUser(res);
      setLogin(res);
      history.replace(from);
     })
    }
    e.preventDefault();
  }

  return (
    <div className="login">
     
      {
        user.isSignedIn && <div> <p>Welcome {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>

      }

      <form onSubmit={submitHandler} action="" className="form-container">
        {newUser && <input className=" same-input-field same-input" type="text" name="name" onBlur={handleBlur} placeholder="Your name" required></input>}<br></br>
        <input className=" same-input-field same-input" type="text" name="email" onBlur={handleBlur} placeholder="Your Email" required></input>
        <br></br>
        <input className="same-input-field same-input" type="password" onBlur={handleBlur} name="password" placeholder="Your Password" required></input>
        <br></br>
        <input className="same-input" type="checkBox" onChange={() => setnewUser(!newUser)} name="newUser" id=""></input>
        <label htmlFor="newUser">New User Registration</label><br></br>
        <input  className="same-input" type="submit" value={newUser ? 'Sign Up' : 'Sign In'}></input>
      </form>

      {
        user.isSignedIn ? <button className="btn same-btn" onClick={googleSignOut}>Sign out</button> : <button className="btn same-btn btn-primary" onClick={googleSignIn}>Sign In With google</button>
      }
       <button onClick={fbSignIn} className="btn fb-btn same-btn">Log In With Facebook</button>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{ color: 'green' }}>Succefully {newUser ? 'Created' : 'log in'}.</p>
      }


    </div>
  );
}

export default Login;

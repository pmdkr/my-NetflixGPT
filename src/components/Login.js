import React, { useRef, useState } from 'react';
import Header from './Header';
import { NETFLIX_HOMEPAGE } from '../utils/constants';
import { checkValidation } from '../utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);

  }

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message)

    // then procced to Sign up/Sign In logic
    if (message === null) {
      if (!isSignInForm) {
        //Sign Up logic will be
        createUserWithEmailAndPassword(auth,
          email.current.value,
          password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage("Something went wrong,please try later");
          });


      } else {
        //Sign In logic will be
        signInWithEmailAndPassword(auth,
          email.current.value,
          password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // console.log(user);

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Invalid credentials");
          });

      }


    }

  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_HOMEPAGE}
          alt="homepage" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className=' w-4/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type='text' placeholder='Full name' className='my-4 p-4 w-full bg-gray-700' />}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='my-4 p-4 w-full bg-gray-700'

        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='my-4 p-4 w-full bg-gray-700'
        />
        <p className='text-red-500 p-4 my-2'>{errorMessage}</p>

        <button className='bg-red-600 my-6 p-4 w-full text-xl font-bold rounded-md'
          onClick={handleButtonClick}
        >{isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <h1 className='cursor-pointer p-4 my-2'
          onClick={toggleSignInForm}
        >{isSignInForm ? "New to Netflix? Sign up Now" : "Already registerd? Sign in Now"}</h1>


      </form>


    </div>
  )
}

export default Login
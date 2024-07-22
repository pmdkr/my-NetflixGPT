import React, { useEffect } from 'react'
import { NETFLIX_LOGO } from '../utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser(
            {
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }));
            navigate("/browse")


        // ...

      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });

  }, []);

  const handleSignOutbutton = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      

    }).catch((error) => {
      // An error happened.
    });


  }
  return (


    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-44' src={NETFLIX_LOGO}
        alt='logo'
      />
      {user && <div className='flex'>
        <img alt='userIcon' className='w-8 h-8 mt-4 mx-2'
          // src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
          src={user?.photoURL}
        />
        <button className='font-bold text-white'
          onClick={handleSignOutbutton}
        >Sign Out</button>

      </div>}
    </div>
  )
}

export default Header
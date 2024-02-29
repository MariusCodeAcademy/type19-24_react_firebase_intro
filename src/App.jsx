import { useEffect, useState } from 'react';
import Login from './components/auth/Login';
import { auth } from './firebase/firebase';
import './styles/App.css';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './components/auth/Logout';

export default function App() {
  const [userObj, setUserObj] = useState(null);
  console.log('userObj ===', userObj);

  const isUserLoggedIn = !!userObj;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user logged in');
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        setUserObj(user);
      } else {
        console.log('user logged out');
        setUserObj(null);
        // User is signed out
        // ...
      }
    });
  }, []);

  // console.log('app ===', app);
  return (
    <div className='App container mx-auto px-4'>
      <h1 className='text-3xl font-bold underline'>Firebase</h1>
      <hr />
      <Logout />
      <p className=''>User logged in: {userObj?.email}</p>
      <Login isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
}

import { useEffect, useState } from 'react';
import Login from './components/auth/Login';
import { auth } from './firebase/firebase';
import './styles/App.css';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './components/auth/Logout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
    <div className='App '>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

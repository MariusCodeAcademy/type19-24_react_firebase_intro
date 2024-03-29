import { useEffect, useState } from 'react';
import Login from './components/auth/Login';
import { auth } from './firebase/firebase';
import './styles/App.css';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './components/auth/Logout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserInfo from './pages/UserInfo';
import Header from './components/layout/Header';
import RegisterPage from './pages/RegisterPage';
import ListsPage from './pages/ListsPage';

export default function App() {
  const [userObj, setUserObj] = useState(null);
  // console.log('userObj ===', userObj);

  const isUserLoggedIn = !!userObj;
  // const isUserLoggedIn = Boolean(userObj);

  useEffect(() => {
    // Specialus observeris kuris stebi musu firebase varotojo prisijungimo busena
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
  const email = userObj?.email;
  // console.log('app ===', app);
  return (
    <div className='App '>
      <Header email={email} isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route
          path='/login'
          element={isUserLoggedIn ? <Navigate to={'/listings'} /> : <LoginPage />}
        />
        <Route
          path='/register'
          element={isUserLoggedIn ? <Navigate to={'/user-info'} /> : <RegisterPage />}
        />
        <Route
          path='/user-info'
          element={isUserLoggedIn ? <UserInfo user={userObj} /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/listings'
          element={isUserLoggedIn ? <ListsPage user={userObj} /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </div>
  );
}

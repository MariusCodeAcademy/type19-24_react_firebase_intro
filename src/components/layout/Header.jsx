import { NavLink, Link } from 'react-router-dom';
import Logout from '../auth/Logout';

export default function Header({ isUserLoggedIn, email }) {
  return (
    <header className='bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h2 className='font-bold text-2xl p-4 tracking-wider'>
            Fire<span className='font-normal uppercase'>Base</span>
          </h2>
        </Link>
        <nav className='flex'>
          <NavLink className='block p-4 hover:bg-gray-800' to='/'>
            Home
          </NavLink>
          {isUserLoggedIn && (
            <>
              <NavLink className='block p-4 hover:bg-gray-800' to='/user-info'>
                User Space
              </NavLink>
              <NavLink className='block p-4 hover:bg-gray-800' to='/listings'>
                Listings
              </NavLink>
            </>
          )}
          {!isUserLoggedIn && (
            <>
              <NavLink className='block p-4 hover:bg-gray-800' to='/login'>
                Login
              </NavLink>
              <NavLink className='block p-4 hover:bg-gray-800' to='/register'>
                Register
              </NavLink>
            </>
          )}
          {isUserLoggedIn && (
            <>
              <NavLink className='block p-4 hover:bg-gray-800' to='/login'>
                <Logout />
              </NavLink>
              <p className='block p-4 hover:bg-gray-800'>{email}</p>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

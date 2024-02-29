import { NavLink, Link } from 'react-router-dom';

export default function Header() {
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
          <NavLink className='block p-4 hover:bg-gray-800' to='/about'>
            About
          </NavLink>
          <NavLink className='block p-4 hover:bg-gray-800' to='/shop'>
            Shop
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

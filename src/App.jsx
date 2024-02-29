import Login from './components/auth/Login';
import app from './firebase/firebase';
import './styles/App.css';

export default function App() {
  console.log('app ===', app);
  return (
    <div className='App container mx-auto px-4'>
      <h1 className='text-3xl font-bold underline'>Hello, world!</h1>

      <hr />
      <Login />
    </div>
  );
}

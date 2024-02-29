import app from './firebase/firebase';
import './styles/App.css';

export default function App() {
  console.log('app ===', app);
  return (
    <div className='App container mx-auto'>
      <h1 className='text-3xl font-bold underline'>Hello, world!</h1>

      <hr />
    </div>
  );
}

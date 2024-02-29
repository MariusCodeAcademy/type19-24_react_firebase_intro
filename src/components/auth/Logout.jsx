import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const Logout = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log('error signOut ===', error);
        // An error happened.
      });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className='border-[1px] px-3 py-1 border-slate-400  rounded-lg'>
        Logout
      </button>
    </div>
  );
};

export default Logout;

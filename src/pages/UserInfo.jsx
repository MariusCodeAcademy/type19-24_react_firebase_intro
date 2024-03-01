import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/firebase';

const UserInfo = ({ user }) => {
  // console.log('user ===', user);

  const [displayNameVal, setDisplayNameVal] = useState(user.displayName || '');

  const updateFireUser = () => {
    updateProfile(auth.currentUser, {
      displayName: displayNameVal,
    })
      .then(() => {
        // Profile updated!
        console.log('update success');
        // ...
      })
      .catch((error) => {
        console.warn('error ===', error);
        // An error occurred
        // ...
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('lets update', displayNameVal);
    updateFireUser();
  };

  return (
    <div className='container mx-auto px-4 '>
      <h1 className='text-3xl font-bold underline my-5'>UserInfo</h1>
      <img src='' alt='display name' />
      <p className=''>Email: {user.email}</p>
      <p className=''>DisplayName: {user.displayName}</p>
      <p className=''>VerifiedUser: </p>
      <hr className='border-2' />
      <form onSubmit={handleUpdate} noValidate>
        {/* Prideti inputa su kuriuo atnaujinam photoURL */}
        <input
          value={displayNameVal}
          onChange={(e) => setDisplayNameVal(e.target.value)}
          type='text'
          className='border px-2 py-1 rounded-md block'
          placeholder='Display Name'
        />
        <button className='border-[1px] px-3 py-1 bg-slate-400 rounded-lg' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
};

export default UserInfo;

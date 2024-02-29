import { useState } from 'react';

const Login = () => {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  /**
   *
   * @param {SubmitEvent} e
   */
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('logiing in');
  };

  return (
    <div className='border shadow-md rounded-lg mt-7 px-8 py-5'>
      <div className='mb-5'>
        <p>email: {emailVal}</p>
        <p>pass: {passwordVal}</p>
      </div>
      <form onSubmit={submitHandler} noValidate className='flex flex-col gap-4'>
        <input
          value={emailVal}
          onChange={(e) => setEmailVal(e.target.value)}
          type='email'
          className='border px-2 py-1 rounded-md block'
          placeholder='email'
        />
        <input
          value={passwordVal}
          onChange={(e) => setPasswordVal(e.target.value)}
          type='password'
          className='border px-2 py-1 rounded-md block'
          placeholder='password'
        />
        <button className='border-[1px] px-3 py-1 bg-slate-400 rounded-lg' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

const Login = () => {
  return (
    <div className='border shadow-md rounded-lg mt-7 px-8 py-5'>
      <form noValidate className='flex flex-col gap-4'>
        <input type='email' className='border px-2 py-1 rounded-md block' placeholder='email' />
        <input
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

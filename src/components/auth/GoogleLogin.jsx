import logo from '../../assets/google-logo.png';

const GoogleLogin = () => {
  return (
    <div className='mt-5'>
      <button className='border shadow-md border-slate-400 rounded-md flex gap-2 items-center px-3 py-1 '>
        <img className='h-10' src={logo} alt='google logo' /> Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;

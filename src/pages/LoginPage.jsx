import Login from '../components/auth/Login';

const LoginPage = () => {
  return (
    <div className='container mx-auto px-4 '>
      <h1 className='text-3xl font-bold underline my-5'>Login to firebase</h1>
      <Login />
    </div>
  );
};

export default LoginPage;

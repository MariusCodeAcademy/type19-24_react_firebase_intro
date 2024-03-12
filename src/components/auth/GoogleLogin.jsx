import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import logo from '../../assets/google-logo.png';
import { googleProvider } from '../../firebase/firebase';

const GoogleLogin = () => {
  const auth = getAuth();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log('token ===', token);
        // The signed-in user info.
        const user = result.user;
        console.log('loginWithGoogle user ===', user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.warn('email ===', email);
        console.warn('error ===', error);
        // ...
      });
  };

  return (
    <div className='mt-5'>
      <button
        onClick={loginWithGoogle}
        className='border shadow-md border-slate-400 rounded-md flex gap-2 items-center px-3 py-1 '>
        <img className='h-10' src={logo} alt='google logo' /> Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;

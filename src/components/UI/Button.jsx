const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='border shadow-md border-slate-400 rounded-md flex gap-2 items-center px-3 py-1 '>
      {children}
    </button>
  );
};

export default Button;

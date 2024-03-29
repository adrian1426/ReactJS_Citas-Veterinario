const ErrorMessage = (props) => {
  const { children } = props;

  return (
    <div className='bg-red-800 text-white text-center p-2 font-bold mb-3 rounded-md'>
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;
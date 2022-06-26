const ErrorMessage = (props) => {
  const { message } = props;

  return (
    <div className='bg-red-800 text-white text-center p-2 font-bold mb-3 rounded-md'>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  const handleSubmit = () => {
    if (inputValue) {
      onSubmit(inputValue); // Call the submit handler passed from App.jsx
      navigate('/Gitcard')
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <input
        className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-1/4 "
        placeholder="Type GitHub username..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-10">Enter</button>

    </div>
  );
};

export default Input;

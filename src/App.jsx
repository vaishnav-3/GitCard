import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Input = lazy(() => import('./components/Input')); 
const GitCard = lazy(() => import('./components/Card')); 

function App() {
  const [username, setUsername] = useState(''); 
  const [data, setData] = useState(null);      

 
  useEffect(() => {
    if (username) {
      const fetchData = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        setData(result); 
      };
      fetchData();
    }
  }, [username]);


  const handleInputSubmit = (inputValue) => {
    setUsername(inputValue);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={"Loading..."}>
              <Input onSubmit={handleInputSubmit} /> 
            </Suspense>
          } 
        />
        <Route 
          path="/Gitcard" 
          element={
            <Suspense fallback={"Loading..."}>
              {data && <GitCard data={data} />} 
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

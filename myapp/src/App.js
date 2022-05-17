import './App.css';
import 'antd/dist/antd.css'
import Login from './login/login';
import { Routes, Route } from 'react-router-dom'
import Home from './home/home';
import DataTable from './table/table';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  const navigate = useNavigate();
  useEffect(() => {
    if (username !== "admin" && password !== "admin")
      navigate('/');
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

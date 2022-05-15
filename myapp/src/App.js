import './App.css';
import 'antd/dist/antd.css'
import Login from './login/login';
import { Routes, Route } from 'react-router-dom'
import Home from './home/home';
import DataTable from './table/table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

export default function Adminpage() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      setToken(response.data);
      alert('Login successful');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-2 mb-2">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h4 className="btn btn-primary text-light text-center w-100 mt-2">
              Admin Home
            </h4>
          </div>
        </div>
      </div>

    </>
  );
}
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Components/NavBar';
import UserGrid from './Components/UserGrid';
import Loader from './Components/Loader';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {isLoading ? <Loader /> : <UserGrid users={users} />}
    </div>
  );
};

export default App;

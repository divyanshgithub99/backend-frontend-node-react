import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    mobile: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/http://localhost:6000/signup', signupData);
      
      if (response.status === 200) {
        // User successfully signed up
        console.log('User signed up successfully');
      } else {
        console.error('Error signing up:', response.data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/http://localhost:6000/login', loginData);
      
      if (response.status === 200) {
        // User successfully logged in
        console.log('User logged in successfully');
      } else {
        console.error('Error logging in:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" name="username" placeholder="Username" onChange={handleSignupChange} />
      <input type="text" name="mobile" placeholder="Mobile" onChange={handleSignupChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleSignupChange} />
      <button onClick={handleSignup}>Sign Up</button>

      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" onChange={handleLoginChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;

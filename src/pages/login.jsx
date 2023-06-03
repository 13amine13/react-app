import React, { useState } from 'react';
import styles from '../Styles/login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('localhost:8080/api/login', {
        email: email,
        password: password
      });
      // Handle successful login response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className={styles.connecter}>
      <h2>Connectez-vous à votre compte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.loginButton}>Se connecter</button>
      </form>
      <p>
        Not registered yet? <Link to="/Register">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;

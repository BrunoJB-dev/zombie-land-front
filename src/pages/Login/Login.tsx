/* import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login; */


// --------------------------------------------------------------------//


/*import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api from "../../api";
import axios from "axios";

import { useUser } from "../../context/UserContext";

import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser, user } = useUser();
  const navigate = useNavigate();

  // This useEffect will redirect the user to the profile page if they are already authenticated
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);

        const userResponse = await api.get("/users/me");
    
        if (userResponse.status === 200) {
          setUser(userResponse.data);
        }
      }

      console.log(response.data);
    } catch (error: import("axios").AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <p>
        Doesn't have an account yet? <Link to="/register">Register here</Link>.
      </p>

      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          required
          id="email"
        />
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          required
          id="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;*/

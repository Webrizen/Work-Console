import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {  useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered email and password match the credentials
    if (email === "user@admin.com" && password === "work@1234") {
      // Save the token in local storage
      localStorage.setItem("token", "CjsdiuyeT8");
       navigate('/');
    } else {
      // Show alert for invalid credentials
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div
        className="createtenant"
        style={{ border: "1px solid black", padding: "1rem" }}
      >
        <h1>Welcome Back - Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "1rem" }}>
            <label htmlFor="Email">Email:</label>
            <input
              type="text"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ margin: "1rem" }}>
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;

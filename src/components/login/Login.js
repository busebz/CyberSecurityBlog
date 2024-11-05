import React, { useState,useRef } from 'react';
import classes from './Login.module.css'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    
    fetch("https://blogloginapi.onrender.com/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        enteredEmail,
        enteredPassword
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./";
        }
      });

  };

  return (
    <form method="POST" className={classes.form} onSubmit={handleSubmit}>
      <h4>Login</h4>
      <div className={classes.input}>
        <p>Email: </p>
        <input type="text" name="email" ref={emailRef}></input>
      </div>
      <div className={classes.input}>
        <p>Password: </p>
        <input type="password" name="password" ref={passwordRef}></input>
      </div>
      <div className={classes.submitAndLogin}>
        <button className={classes.button}>Login</button>
      </div>
    </form>
  );
};

export default Login;



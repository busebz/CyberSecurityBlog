import React, { useRef } from "react";
import classes from "./Register.module.css";
import { Form,json, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredEmail = emailRef.current.value;

    const res = await fetch("https://blogloginapi.onrender.com/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        //"Acces-Allow-Control-Origin": '*',
      },
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
        email: enteredEmail,
      }),
    });

    if (res.status === 422) {
      return res;
    }

    if (!res.ok) {
      throw json({ message: "Could not save user." }, { status: 500 });
    }
    return navigate("/login");
  }

  return (
    <Form className={classes.form} method="post" onSubmit={submitHandler}>
      <h4>Register</h4>
      <div className={classes.input}>
        <p>Username: </p>
        <input type="text" name="username" ref={usernameRef}></input>
      </div>
      <div className={classes.input}>
        <p>Password: </p>
        <input type="password" name="password" ref={passwordRef}></input>
      </div>
      <div className={classes.input}>
        <p>E-mail: </p>
        <input type="email" name="email" ref={emailRef}></input>
      </div>
      <div className={classes.submitAndLogin}>
        <button className={classes.button}>Register</button>
        <a href="/login">Do you have an account?</a>
      </div>
    </Form>
  );
};

export default Register;

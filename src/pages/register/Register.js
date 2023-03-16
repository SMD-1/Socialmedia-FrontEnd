import { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { prefix } from "../../apiconfig";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";

import "react-toastify/dist/ReactToastify.css";
import "./register.css";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  useEffect(() => {});

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      return toast("Password and Confirm password doesn't match", {
        position: "top-right",
        type: "warning",
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const newUser = await axios.post(prefix + "auth/register", user);
        console.log(newUser);
        loginCall(
          {
            email: email.current.value,
            password: password.current.value,
          },
          dispatch
        );
        toast("Registered Successfully!", {
          position: "top-right",
          type: "success",
          theme: "dark",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (err) {
        // yahan ayega error aur hoga toastify
        toast(err.message, {
          position: "top-right",
          type: "error",
          theme: "dark",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // console.log(err.message);
      }
    }
  };
  const onClick = () => {
    history.push("/login");
  };
  return (
    <div className="login">
      <div className="top">
        <h1 className="loginLogo">Register</h1>
        <p>Create an account</p>
      </div>
      <div className="loginForm">
        <form className="loginBox" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="loginInput"
            ref={username}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="loginInput"
            type="email"
            placeholder="Email"
            ref={email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="loginInput"
            type="password"
            placeholder="Password"
            ref={password}
            minLength="6"
          />
          <label htmlFor="confpass">Confirm Password</label>
          <input
            id="confpass"
            className="loginInput"
            type="password"
            placeholder="Confirm Password"
            ref={passwordAgain}
          />
          <button className="loginButton" type="submit">
            Signup
          </button>
          <p className="or">OR</p>
          <button className="createNewAcc" onClick={onClick}>
            Already have an account?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

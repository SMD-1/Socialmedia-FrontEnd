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
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const newUser = await axios.post(prefix + "auth/register", user);
        toast("Sussssses", {
          position: "top-right",
          type: "success",
          theme: "dark",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        loginCall(
          {
            email: email.current.value,
            password: password.current.value,
          },
          dispatch
        );
        // TODO: redirect to login page
        // history.push("/login");
      } catch (err) {
        // yahan ayega error aur hoga toastify
        toast("Couldn't register! Please try again ", {
          position: "top-right",
          type: "error",
          theme: "dark",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(err);
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
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="loginInput"
            ref={username}
            // required
          />
          <label for="email">Email</label>
          <input
            id="email"
            className="loginInput"
            type="email"
            placeholder="Email"
            ref={email}
            // required
          />
          <label for="password">Password</label>
          <input
            id="password"
            className="loginInput"
            type="password"
            placeholder="Password"
            ref={password}
            minLength="6"
            // required
          />
          <label for="confpass">Confirm Password</label>
          <input
            id="confpass"
            className="loginInput"
            type="password"
            placeholder="Confirm Password"
            ref={passwordAgain}
            // required
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

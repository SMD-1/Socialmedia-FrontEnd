import "./register.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

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
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const onClick = () => {
    history.push("/login");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MAKAUTiians</h3>
          <span className="logiDesc">Connect with you Seniors / Juniors </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="username"
              className="loginInput"
              ref={username}
              required
            />
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              ref={password}
              minLength="6"
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Confirm Password"
              ref={passwordAgain}
              required
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
    </div>
  );
};

export default Register;

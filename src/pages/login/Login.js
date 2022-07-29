import { useContext, useRef } from "react";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  // here we can also use useState
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(password.current.value);
  };

  const onClick = () => {
    history.push("/register");
  };

  console.log("user after login", user);
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
              className="loginInput"
              type="email"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              minLength="6"
              required
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? "Loading..." : "Login"}
            </button>
            <span className="forgotPass">Forgot Password ?</span>
            <button className="createNewAcc" onClick={onClick}>
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

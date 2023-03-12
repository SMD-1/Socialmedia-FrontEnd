import { useContext, useRef } from "react";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../register/register.css";

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
    // console.log(password.current.value);
  };

  const onClick = () => {
    history.push("/register");
  };
  const diffToast = () => {
    toast.warn("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  console.log("user after login", user);
  return (
    <>
      <div className="login">
        <div className="top">
          <h1 className="loginLogo">Login</h1>
          <p>Welcome Back</p>
        </div>
        <div className="loginForm">
          <form className="loginBox" onSubmit={submitHandler}>
            <label htmlFor="username">Email</label>
            <input
              id="email"
              className="loginInput"
              type="email"
              placeholder="Email *"
              required
              ref={email}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="loginInput"
              type="password"
              placeholder="Password *"
              minLength="6"
              required
              ref={password}
            />
            <button
              className="loginButton"
              disabled={isFetching}
              onClick={diffToast}
            >
              {isFetching ? "Loading..." : "Login"}
            </button>
            {/* <span className="forgotPass">Forgot Password ?</span> */}
            <button className="createNewAcc" onClick={onClick}>
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

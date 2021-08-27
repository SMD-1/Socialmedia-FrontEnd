import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MAKAUTiians</h3>
          <span className="logiDesc">Connect with you Seniors / Juniors </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="email" placeholder="Email" />
            <input
              className="loginInput"
              type="passowrd"
              placeholder="Password"
            />
            <button className="loginButton">Login</button>
            <span className="forgotPass">Forgot Password ?</span>
            <button className="createNewAcc">Create a new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

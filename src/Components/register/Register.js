import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MAKAUTiians</h3>
          <span className="logiDesc">Connect with you Seniors / Juniors </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="username" className="loginInput" />
            <input className="loginInput" type="email" placeholder="Email" />
            <input
              className="loginInput"
              type="passowrd"
              placeholder="Password"
            />
            <input
              className="loginInput"
              type="passowrd"
              placeholder="Confirm Password"
            />
            <button className="loginButton">Signup</button>
            <button className="createNewAcc">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

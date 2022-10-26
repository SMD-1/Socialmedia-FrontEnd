import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error404 from "./Components/error404/Error404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import { ToastContainer } from "react-toastify";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/profile/:username" exact>
            {user ? <Profile /> : <Register />}
          </Route>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register" exact>
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/messenger" exact>
            {!user ? <Redirect to="/" /> : <Messenger />}
          </Route>
          <Route path="*" exact>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

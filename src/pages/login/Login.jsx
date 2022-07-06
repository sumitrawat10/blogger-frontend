import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const {  dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", {
          username:userRef.current.value,
          password:passwordRef.current.value,      
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(isFetching);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log("err", err);
    }
  };
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

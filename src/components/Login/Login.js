import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// TODO :Mobile Responsive css

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();

  const [msg, setmsg] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    let obj = {
      name: "najeebu50@gmail.com",
      pass: "1234",
    };
    if (email === obj.name && pass === obj.pass) {
      sessionStorage.setItem("isLogin", true);

      navigate("/home");
    } else {
      setmsg("Please enter valid username or password");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign into your account</h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default Login;

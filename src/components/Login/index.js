import React from "react";
import "./Login.scss";

const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("************ e", e);
    try {
      // const res = await fetch(``, {
      //   method: "POST",
      //   headers: new Headers({
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   }),
      //   body: {}
      // });
      console.log("************ var ");
    } catch (err) {
      console.log("************ err", err);
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit} autoComplete="off">
      <h1>Login</h1>
      <input type="text" name="" placeholder="Username" autoComplete="off" />
      <input
        type="password"
        name=""
        placeholder="Password"
        autoComplete="off"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

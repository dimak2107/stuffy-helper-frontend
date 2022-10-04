import { FormEvent, useState } from "react";
import axios from "axios";
import api from "../api/myApi";
import useAuth from "./AuthProvider";

// const [token, setToken] = useState("");

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    auth.login({ username, password });
  }

  const getEvents = api.api.eventsList;

  return (
    <form className="page__form" onSubmit={onSubmit}>
      <h1 className="form__header">Login Page</h1>
      <div className="form__inputs">
        <input
          className="input__style"
          type="text"
          placeholder="username"
          required
          value={username}
          onChange={(uname) => setUsername(uname.target.value)}
        />
        <input
          className="input__style"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
        />
      </div>

      <div className="page__btn">
        <button className="btn" type="submit" disabled={auth.loading}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;

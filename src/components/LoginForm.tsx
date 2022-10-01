import { FormEvent, useState } from "react";
import axios from "axios";
import "./LoginForm.module.css";
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
    <>
      <span className="material-text">Авторизация</span>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          required
          value={username}
          onChange={(uname) => setUsername(uname.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <button type="submit" disabled={auth.loading}>
          login
        </button>
      </form>
    </>
  );
}

export default Login;

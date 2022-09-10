import { useState } from "react";
import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import "./login.css";
import api, { addInterceptor } from "./api/myApi";
import { LoginModel } from "./api/__generated__/api";

// const [token, setToken] = useState("");
const axiosApiInstance = axios.create();

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const [user, setUser] = useState(null);
  function login(payload: LoginModel) {
    return api.api.authLoginCreate(payload, {
      headers: { "Content-Type": "application/json" },
    });
  }

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    login({ username, password }).then((response) => {
      setToken(response.headers.token);
      addInterceptor(response.headers.token);
    });
  }

  const getEvents = api.api.eventsList;

  return (
    <div className="login">
      <div className="form">
        {!token.length ? (
          <>
            <span className="material-text">Авторизация</span>
            <form className="login-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="username"
                required
                // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
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
              <button type="submit" disabled={isLoading}>
                login
              </button>
            </form>
          </>
        ) : (
          <span className="material-text">
            Login successed! {user?.username}
          </span>
        )}
        <button onClick={() => getEvents()}>Get events</button>
      </div>
    </div>
  );
}

export default Login;

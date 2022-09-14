import { useState } from "react";
import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import "./register.css";
import api, { addInterceptor } from "./api/myApi";
import { LoginModel } from "./api/__generated__/api";

// const [token, setToken] = useState("");
const axiosApiInstance = axios.create();

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    <div className="reg">
      <div className="form">
        {!token.length ? (
          <>
            <span className="material-text">Sign Up</span>
            <label className="login">Login</label>
            <label className="x">x</label>
            <form className="register-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="username"
                required
                // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
                value={username}
                onChange={(uname) => setUsername(uname.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(em) => setEmail(em.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(pass) => setPassword(pass.target.value)}
              />
              <label>
                <img
                  className="show-pass"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllDX4qAdJGzeGcnjp_ZvXwy0l7nI9IV7LYw&usqp=CAU"
                  alt="showpass"
                />
              </label>
              <br></br>
              <div className="info">
                <input id="html" type="checkbox" className="check"></input>
                <label className="agreement">
                  I would like to receive your newsletter and other promotional
                  information.
                </label>
              </div>

              <br></br>
              <button type="submit" disabled={isLoading}>
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <span className="material-text">
            Регистрация завершена успешно! {user?.username}
          </span>
        )}
        {/* <button onClick={() => getEvents()}>Get events</button> */}
      </div>
    </div>
  );
}

export default Register;

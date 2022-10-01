import { FormEvent, useState } from "react";
import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import "./RegisterForm.module.css";
import api, { addInterceptor } from "../api/myApi";
import { LoginModel, RegisterModel } from "../api/__generated__/api";
import useAuth from "./AuthProvider";

// const [token, setToken] = useState("");
const axiosApiInstance = axios.create();

// "The Phone field is required.", "The LastName field is required.", "The NickName field is required.", "The MiddleName field is required."
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [user, setUser] = useState(null);

  const auth = useAuth();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload: RegisterModel = {
      username: username,
      email: email,
      password: password,
      firstName: firstname,
      lastName: lastname,
      middleName: middlename,
      nickName: nickname,
      phone: phone,
    };
    auth.register(payload);
  }

  return (
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
        type="text"
        placeholder="firstname"
        required
        // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
        value={firstname}
        onChange={(value) => setFirstname(value.target.value)}
      />
      <input
        type="text"
        placeholder="phone"
        // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
        value={phone}
        onChange={(value) => setPhone(value.target.value)}
      />
      <input
        type="text"
        placeholder="lastname"
        // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
        value={lastname}
        onChange={(value) => setLastName(value.target.value)}
      />
      <input
        type="text"
        placeholder="middlename"
        // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
        value={middlename}
        onChange={(value) => setMiddleName(value.target.value)}
      />
      <input
        type="text"
        placeholder="nickname"
        // pattern="^[a-zA-ZА-Яа-яЁё]{1}+[a-zA-ZА-ЯЁа-яё]{0,20}$"
        value={nickname}
        onChange={(value) => setNickname(value.target.value)}
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
      <button type="submit" disabled={auth.loading}>
        Sign Up
      </button>
    </form>
  );
}

export default Register;

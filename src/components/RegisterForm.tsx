import { FormEvent, useState } from "react";
import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import api, { addInterceptor } from "../api/myApi";
import { LoginModel, RegisterModel } from "../api/__generated__/api";
import useAuth from "./AuthProvider";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const axiosApiInstance = axios.create();

// "The Phone field is required.", "The LastName field is required.", "The NickName field is required.", "The MiddleName field is required."
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const auth = useAuth();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload: RegisterModel = {
      username: username,
      email: email,
      password: password,
    };
    auth.register(payload);
  }

  return (
    <form onSubmit={onSubmit} className="page__form">
      <h1 className="form__header">Register page</h1>
      <div className="form__inputs">
        <TextField
          className="input__style"
          id="outlined-required"
          label="username"
          margin="dense"
          required
          value={username}
          onChange={(uname) => setUsername(uname.target.value)}
        />
        <TextField
          className="input__style"
          id="outlined-required"
          label="email"
          margin="dense"
          required
          value={email}
          onChange={(em) => setEmail(em.target.value)}
        />
        <FormControl margin="dense" className="input__style">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            label="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
          ></OutlinedInput>
        </FormControl>

        <label className="agreement">
          <input type="checkbox" className="check"></input> I would like to
          receive your newsletter and other promotional information.
        </label>
      </div>

      <div className="page__btn">
        <Button
          variant="contained"
          type="submit"
          disabled={auth.loading}
          className="page__btn"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default Register;

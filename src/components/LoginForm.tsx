import { FormEvent, useState } from "react";
import api from "../api/myApi";
import useAuth from "./AuthProvider";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const auth = useAuth();

  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

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
    auth.login({ username, password });
  }

  // const getEvents = api.api.eventsList;

  return (
    <form className="page__form" onSubmit={onSubmit}>
      <h2 className="form__header">Login Page</h2>
      <div className="form__inputs">
        <TextField
          className="input__style"
          id="outlined-required"
          label="username"
          margin="dense"
          value={username}
          onChange={(uname) => setUsername(uname.target.value)}
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
        <div className="page__btn">
          <Button
            variant="contained"
            type="submit"
            disabled={auth.loading}
            className="page__btn"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Login;

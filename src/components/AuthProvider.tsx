import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import { useHistory, useLocation } from "react-router-dom";
import api, { addInterceptor } from "../api/myApi";
import { LoginModel, RegisterModel } from "../api/__generated__/api";

import { useNavigate, useLocation } from "react-router-dom";

interface AuthContextType {
  // We defined the user type in `index.d.ts`, but it's
  // a simple object with email, name and password.
  //   user?: User;
  loading: boolean;
  error?: any;
  login: (payload: LoginModel) => void;
  register: (payload: RegisterModel) => void;
  //   signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  //   const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>();
  //   const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  // We are using `react-router` for this example,
  // but feel free to omit this or use the
  // router of your choice.
  const navigate = useNavigate();
  const location = useLocation();
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    addInterceptor(token);
  }, []);

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.

  // Sends sign up details to the server. On success we just apply
  // the created user to the state.
  function login(payload: LoginModel) {
    setLoading(true);

    api.api
      .authLoginCreate(payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // setToken(response.headers.token);
        addInterceptor(response.headers.token);
        localStorage.setItem("token", `${response.headers.token}`);
        navigate("/");
        // history.push("/");
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  function register(payload: RegisterModel) {
    setLoading(true);

    api.api
      .authRegisterCreate(payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {});
  }

  function logout() {
    api.api.authLogoutCreate();
  }

  // TODO: LOGOUT
  //   function logout() {
  //     sessionsApi.logout().then(() => setUser(undefined));
  //   }

  const memoedValue = useMemo(
    () => ({
      // user,
      loading,
      error,
      login,
      register,
      logout,
    }),
    [loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./components/LoginForm";
import "./index.css";

import App from "./App";
import Register from "./components/RegisterForm";

const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <Login />
//     </QueryClientProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <Register /> */}
    </QueryClientProvider>
  </React.StrictMode>
);

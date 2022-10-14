import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RootPage from "./pages/RootPage";
import { AuthProvider } from "./components/AuthProvider";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<RootPage />} />
          <Route path="/events/:eventId" element={<EventPage />} />
          {/* TODO: * на / */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

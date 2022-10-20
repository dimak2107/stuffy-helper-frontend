import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import { AuthProvider } from "./components/AuthProvider";
import EventDetailedPage from "./pages/EventDetailedPage";
import ShoppingDetailPage from "./pages/ShoppingDetailPage";
import MainPage from "./pages/MainPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/new" element={<NewEventPage />} />
            <Route path="/events/:eventId" element={<EventDetailedPage />} />
            <Route
              path="/events/:eventId/shoppings/:shoppingId"
              element={<ShoppingDetailPage />}
            />
          </Routes>
        </LocalizationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

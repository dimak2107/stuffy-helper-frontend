import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import NewShoppingPage from "./pages/NewShoppingPage";
import NewPurchasePage from "./pages/NewPurchasePage";
import EditPurchasePage from "./pages/EditPurchasePage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/events" />} />
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/new" element={<NewEventPage />} />
            <Route path="/events/:eventId" element={<EventDetailedPage />} />
            <Route
              path="/events/:eventId/shoppings/new"
              element={<NewShoppingPage />}
            />
            <Route
              path="/events/:eventId/shoppings/:shoppingId"
              element={<ShoppingDetailPage />}
            />
            <Route
              path="/events/:eventId/shoppings/:shoppingId/new"
              element={<NewPurchasePage />}
            />
            <Route
              path="/events/:eventId/shoppings/:shoppingId/:purchaseId"
              element={<EditPurchasePage />}
            />
          </Routes>
        </LocalizationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

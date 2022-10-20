import { Outlet } from "react-router-dom";
import GetEventList from "../components/MainForm";

function EventsPage() {
  return (
    <div className="page">
      <h1 className="page__header">Главная страница</h1>
      <GetEventList />
    </div>
  );
}

export default EventsPage;

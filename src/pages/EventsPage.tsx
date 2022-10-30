import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import GetEventList from "../components/MainForm";

function EventsPage() {
  return (
    <div className="page">
      <div className="page__header">
        <h1>События</h1>
        <Button
          className="page__add-event"
          component={Link}
          color="success"
          size="small"
          to={`/events/new`}
        >
          +
        </Button>
      </div>

      <GetEventList />
    </div>
  );
}

export default EventsPage;

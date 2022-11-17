import { IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import GetEventList from "../components/MainForm";
import AddIcon from "@mui/icons-material/Add";

function EventsPage() {
  return (
    <div className="page">
      <div className="page__header">
        <h1>События</h1>
        <IconButton
          className="page__add-event"
          component={Link}
          color="success"
          size="small"
          to={`/events/new`}
        >
          <AddIcon />
        </IconButton>
      </div>

      <GetEventList />
    </div>
  );
}

export default EventsPage;

import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import NewEvent from "../components/NewEvent";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function NewEventsPage() {
  const navigate = useNavigate();

  const onCreatedEvent = (id: string): void => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="page">
      <div className="event__header">
        <IconButton
          component={Link}
          color="success"
          size="small"
          to={`/events`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <h1 className="page__header">Новый эвент</h1>
      </div>

      <NewEvent onCreated={onCreatedEvent} />
    </div>
  );
}

export default NewEventsPage;

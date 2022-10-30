import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import NewEvent from "../components/NewEvent";

function NewEventsPage() {
  const navigate = useNavigate();

  const onCreatedEvent = (id: string): void => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="page">
      <div className="event__header">
        <Button component={Link} color="success" size="small" to={`/events`}>
          Back
        </Button>
        <h1 className="page__header">Новый эвент</h1>
      </div>

      <NewEvent onCreated={onCreatedEvent} />
    </div>
  );
}

export default NewEventsPage;

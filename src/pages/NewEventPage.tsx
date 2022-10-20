import { Outlet, useNavigate } from "react-router-dom";
import NewEvent from "../components/NewEvent";

function NewEventsPage() {
  const navigate = useNavigate();

  const onCreatedEvent = (id: string): void => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="page">
      <h1 className="page__header">Новый эвент</h1>
      <NewEvent onCreated={onCreatedEvent} />
    </div>
  );
}

export default NewEventsPage;

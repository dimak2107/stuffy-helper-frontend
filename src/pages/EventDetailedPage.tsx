import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetEventEntry } from "../api/__generated__/api";
import EventDetail from "../components/EventDetail";
import Loader from "../components/UI/loader/Loader";

function EventDetailedPage() {
  const [event, setEvent] = useState<GetEventEntry>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let params = useParams();
  const eventId = params.eventId;

  useEffect(() => {
    if (!eventId) return;
    api.api
      .eventsDetail(eventId, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [eventId]);

  if (!event) return <Loader />;

  return (
    <div className="events__list">
      <EventDetail event={event} />
    </div>
  );
}

export default EventDetailedPage;

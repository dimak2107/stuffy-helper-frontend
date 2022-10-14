import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetEventEntry } from "../api/__generated__/api";
import EventDetail from "../components/EventDetail";

function EventPage() {
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

  return (
    <div className="events__list">
      <EventDetail />
    </div>
  );
}

export default EventPage;

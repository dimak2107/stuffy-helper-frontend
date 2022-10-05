import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../api/myApi";
import { GetEventEntry } from "../api/__generated__/api";
import EventShort from "./EventShort";
import "./MainForm.css";

function GetEventList() {
  const [eventList, setEventList] = useState<GetEventEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    api.api
      .eventsList(undefined, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setEventList(response.data?.data ?? []);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const listItems = eventList.map((event) => (
    <li key={event.id}>
      <EventShort eventShort={event} />
    </li>
  ));

  return (
    <div className="events__list">
      <ul>{listItems}</ul>
    </div>
  );
}

export default GetEventList;

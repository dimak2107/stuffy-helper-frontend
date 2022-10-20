import React, { useEffect, useState } from "react";
import api from "../api/myApi";
import { EventShortEntry } from "../api/__generated__/api";
import EventShort from "./EventShort";
import "./MainForm.css";
import { EventSearch } from "./EventSearch";
import { useMemo } from "react";

function GetEventList() {
  const [eventList, setEventList] = useState<EventShortEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [inputValue, setInputValue] = useState("");

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

  const listItems = useMemo(
    () =>
      eventList
        .filter((elem) =>
          elem.name?.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((event) => (
          <li key={event.id}>
            <EventShort eventShort={event} />
          </li>
        )),
    [inputValue, eventList]
  );
  console.log(event);
  return (
    <div className="events__list">
      <div className="events__search-bar">
        <EventSearch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default GetEventList;

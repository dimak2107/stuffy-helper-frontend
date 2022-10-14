import { AvatarGroup, TextField } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetEventEntry } from "../api/__generated__/api";
import Avatar from "@mui/material/Avatar";
import "./EventDetail.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ru";

dayjs.extend(utc);
dayjs.locale("ru");

function EventDetail() {
  const [event, setEvent] = useState<GetEventEntry>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let params = useParams();

  const eventId = params.eventId;

  function dateFormat() {
    return dayjs.utc().format(event?.eventDateStart.substring(0, 10));
  }

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

  const eventParticipants = event?.participants?.map((participant) => (
    <div key={participant.id} className="event__participant">
      <Avatar
        alt="no img"
        src="https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg"
      ></Avatar>
      {participant.user.name}
    </div>
  ));

  return (
    <div className="event__detailed">
      <div className="event__status">
        <label>{event?.isCompleted ? "Завершен" : "Не завершен"}</label>
      </div>
      <div className="event__photo">
        <img src="" alt="КРУТАЯ ФОТКА С УЧАСТНИКАМИ" />
      </div>
      <div className="event__name">{event?.name}</div>
      <div className="event__date">
        <p>{dateFormat()}</p>
      </div>

      <div className="event__description">
        <h3>Описание:</h3>
        <p className="event__description-text">{event?.description}</p>
      </div>

      <div className="event__participants">
        <h3>Участники:</h3>
        <AvatarGroup max={4} sx={{ flexDirection: "row" }}>
          {eventParticipants}
        </AvatarGroup>
      </div>
      <div className="event__purchases">
        <h3>Покупки:</h3>
      </div>
    </div>
  );
}

export default EventDetail;

import { AvatarGroup, IconButton } from "@mui/material";
import { GetEventEntry } from "../api/__generated__/api";
import Avatar from "@mui/material/Avatar";
import "./EventDetail.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";
import ShoppingShort from "./ShoppingShort";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import api from "../api/myApi";
import { useMemo, useState } from "react";

dayjs.extend(utc);
dayjs.locale("ru");
dayjs.extend(localizedFormat);

interface EventDetailProps {
  event: GetEventEntry;
}

function EventDetail({ event }: EventDetailProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [deletedShopping, setDeletedShopping] = useState(false);
  const [shoppings, setShoppings] = useState(event?.shoppings);

  function dateFormat() {
    return dayjs.utc(event.eventDateStart).format("LL");
  }

  const Participants = event.participants?.map((participant) => (
    <div key={participant.id} className="event__participant">
      <Avatar
        alt="no img"
        src="https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg"
      ></Avatar>
      {participant.name}
    </div>
  ));

  const handleDeleteShopping = (shoppingId: string) => {
    console.log(`deleted: ${shoppingId}`);

    api.api
      .shoppingsDelete(shoppingId)

      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    setDeletedShopping(deletedShopping === false ? true : false);
    setShoppings(shoppings?.filter((elem) => elem.id !== shoppingId));
  };

  const ShoppingsDetailed = useMemo(
    () =>
      shoppings?.map((shop) => (
        <li key={shop.id}>
          <ShoppingShort
            shoppingShort={shop}
            eventId={event.id}
            onDeleted={handleDeleteShopping}
          />
        </li>
      )),
    [deletedShopping]
  );

  return (
    <div className="event__detailed">
      <div className="event__header">
        <IconButton
          component={Link}
          color="success"
          size="small"
          to={`/events`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <div className="event__status">
          <label>{event?.isCompleted ? "Завершен" : "Не завершен"}</label>
        </div>
      </div>
      <div className="event__photo">
        <img
          src={event.mediaUri}
          alt="КРУТАЯ ФОТКА С УЧАСТНИКАМИ"
          width={`100%`}
        />
      </div>
      <h2>{event?.name}</h2>
      <div className="event__date">{dateFormat()}</div>

      <div className="event__description">
        <h3>Описание:</h3>
        <p className="event__description-text">{event?.description}</p>
      </div>

      <div className="event__participants">
        <h3>Участники:</h3>
        <AvatarGroup max={4} sx={{ flexDirection: "row" }}>
          {Participants}
        </AvatarGroup>
      </div>
      <div className="event__shopping-list">
        <div className="list__header">
          <h3>Покупки:</h3>
          <IconButton
            className="shopping__add-btn"
            component={Link}
            color="success"
            size="small"
            to={`/events/${event.id}/shoppings/new`}
          >
            <AddIcon />
          </IconButton>
        </div>

        <ul>{ShoppingsDetailed}</ul>
      </div>
    </div>
  );
}

export default EventDetail;

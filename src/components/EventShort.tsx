import { GetEventEntry } from "../api/__generated__/api";
import "./EventShort.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";
import { Link } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.locale("ru");

interface EventShortProps {
  eventShort: GetEventEntry;
}
const EventShort = ({ eventShort }: EventShortProps) => {
  function formatDate() {
    return dayjs.utc(eventShort.eventDateStart).fromNow();
  }

  return (
    <div className="event-short">
      <Link to={`/events/${eventShort.id}`}>
        <div className="event-short__top">
          <h2 className="event-short__title">{eventShort.name}</h2>
          <div className="event-short__time">{formatDate()}</div>
        </div>
        <div className="event-short__desc">{eventShort.description}</div>
      </Link>
    </div>
  );
};

export default EventShort;

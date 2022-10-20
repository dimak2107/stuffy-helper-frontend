import { EventShortEntry } from "../api/__generated__/api";
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
  eventShort: EventShortEntry;
}
const EventShort = ({ eventShort }: EventShortProps) => {
  function formatDate() {
    return dayjs.utc(eventShort.eventDateStart).fromNow();
  }

  return (
    <Link className="event-short" to={`/events/${eventShort.id}`}>
      <div className="event-short__top">
        <h2 className="event-short__title">{eventShort.name}</h2>
        <div className="event-short__time text-sm">{formatDate()}</div>
      </div>
      <div className="event-short__desc text-sm">{eventShort.description}</div>
    </Link>
  );
};

export default EventShort;

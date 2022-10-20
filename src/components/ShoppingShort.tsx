import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";
import { ShoppingShortEntry } from "../api/__generated__/api";
import { Link } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.locale("ru");

interface ShopingShortProps {
  eventId: string;
  shoppingShort: ShoppingShortEntry;
}

const ShoppingShort = ({ shoppingShort, eventId }: ShopingShortProps) => {
  function formatDate() {
    return dayjs.utc(shoppingShort.shoppingDate).fromNow();
  }

  return (
    <Link
      className="event-short"
      to={`/events/${eventId}/shoppings/${shoppingShort.id}`}
    >
      <div className="shop-short__top">
        <h2 className="shop-short__title">{shoppingShort.description}</h2>
        <div className="shop-short__time text-sm">{formatDate()}</div>
      </div>
      {/* <div className="event-short__desc text-sm">{shopingListShort.cost}</div> */}
    </Link>
  );
};

export default ShoppingShort;

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";
import { ShoppingShortEntry } from "../api/__generated__/api";
import { Link } from "react-router-dom";
import "./ShoppingShort.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.locale("ru");

interface ShopingShortProps {
  eventId: string;
  onDeleted: any;
  shoppingShort: ShoppingShortEntry;
}

const ShoppingShort = ({
  shoppingShort,
  eventId,
  onDeleted,
}: ShopingShortProps) => {
  function formatDate() {
    return dayjs.utc(shoppingShort.shoppingDate).fromNow();
  }

  return (
    <div className="shop-short">
      <Link to={`/events/${eventId}/shoppings/${shoppingShort.id}`}>
        <div className="shop-short__top">
          <h2 className="shop-short__title">{shoppingShort.description}</h2>
          <div className="shop-short__time text-sm">{formatDate()}</div>
        </div>
        {/* <div className="event-short__desc text-sm">{shoppingShort.cost}</div> */}
      </Link>
      <Stack direction="column" spacing={0}>
        <IconButton aria-label="delete" size="small" component={Link}>
          <Edit fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e) => onDeleted(shoppingShort.id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default ShoppingShort;

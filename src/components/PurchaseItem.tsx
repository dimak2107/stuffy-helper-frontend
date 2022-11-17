import { Link } from "react-router-dom";
import { PurchaseShortEntry } from "../api/__generated__/api";
import "./PurchaseItem.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import api from "../api/myApi";
import { useState } from "react";

interface PurchaseListProps {
  purchaseShort: PurchaseShortEntry;
  eventId: string;
  shoppingId: string;
  onDeleted: any;
}

const PurchaseItem = ({
  purchaseShort,
  eventId,
  shoppingId,
  onDeleted,
}: PurchaseListProps) => {
  const to = `/events/${eventId}/shoppings/${shoppingId}/${purchaseShort.id}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  return (
    <div className="purchase-item">
      <div>
        <h3>{purchaseShort.name}</h3>
        <div className=" text-sm">{`${purchaseShort.amount} ${purchaseShort.unitType?.name}`}</div>
      </div>
      <div className="purchase-item__count text-sm">{`${purchaseShort.cost} р.`}</div>
      <Stack direction="column" spacing={0}>
        <IconButton aria-label="delete" size="small" component={Link} to={to}>
          <Edit fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e) => onDeleted(purchaseShort.id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default PurchaseItem;

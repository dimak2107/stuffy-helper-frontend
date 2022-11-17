import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetShoppingEntry, PurchaseShortEntry } from "../api/__generated__/api";
import { EventSearch } from "./EventSearch";
import PurchaseDetailed from "./PurchaseItem";
import "./ShoppingDetail.css";
import { Link } from "react-router-dom";
import PurchaseItem from "./PurchaseItem";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface ShoppingDetailProps {
  shoppingDetail: GetShoppingEntry;
}

function ShoppingDetail({ shoppingDetail }: ShoppingDetailProps) {
  const { description, purchases, event } = shoppingDetail;
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [deletedPurchase, setDeletedPurchase] = useState(false);

  const [purchasesList, setPurchasesList] = useState(purchases);

  const handleDeletePurchase = (purchaseId: string) => {
    console.log(`deleted: ${purchaseId}`);

    api.api
      .purchasesDelete(purchaseId)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    setDeletedPurchase(deletedPurchase === false ? true : false);
    setPurchasesList(purchasesList?.filter((elem) => elem.id !== purchaseId));
  };

  const CheckDetailed = useMemo(
    () =>
      purchasesList
        ?.filter((elem) =>
          elem.name?.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((purchase) => (
          <li key={purchase.id}>
            <PurchaseItem
              purchaseShort={purchase}
              eventId={event.id}
              shoppingId={shoppingDetail.id}
              onDeleted={handleDeletePurchase}
            />
          </li>
        )) ?? [],
    [purchases, inputValue, deletedPurchase]
  );

  return (
    <>
      <div className="purchase__short">
        <IconButton
          component={Link}
          color="success"
          size="small"
          to={`/events/${event.id}`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <h2>{shoppingDetail.description}</h2>
        <IconButton
          className="page__add-purchase"
          component={Link}
          color="success"
          to={`/events/${event.id}/shoppings/${shoppingDetail.id}/new`}
        >
          <AddIcon />
        </IconButton>
      </div>
      <div className="shopping__detailed">
        <EventSearch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
        <ul>{CheckDetailed}</ul>
      </div>
    </>
  );
}

export default ShoppingDetail;

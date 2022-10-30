import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetShoppingEntry } from "../api/__generated__/api";
import { EventSearch } from "./EventSearch";
import PurchaseDetailed from "./PurchaseItem";
import "./ShoppingDetail.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PurchaseItem from "./PurchaseItem";

interface ShoppingDetailProps {
  shoppingDetail: GetShoppingEntry;
}

function GetShoppingDetail({ shoppingDetail }: ShoppingDetailProps) {
  const { description, purchases, event } = shoppingDetail;
  const [inputValue, setInputValue] = useState("");
  const CheckDetailed = useMemo(
    () =>
      purchases
        ?.filter((elem) =>
          elem.name?.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((purchase) => (
          <li key={purchase.id}>
            <PurchaseItem purchaseShort={purchase} />
          </li>
        )) ?? [],
    [purchases, inputValue]
  );

  return (
    <>
      <div className="purchase__short">
        <Button
          component={Link}
          color="success"
          size="small"
          to={`/events/${event.id}`}
        >
          Back
        </Button>
        <h2>{shoppingDetail.description}</h2>
        <Button
          className="page__add-purchase"
          component={Link}
          color="success"
          size="small"
          to={`/events/${event.id}/shoppings/${shoppingDetail.id}/new`}
        >
          +
        </Button>
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

export default GetShoppingDetail;

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import {
  GetEventEntry,
  GetPurchaseEntry,
  GetShoppingEntry,
  PurchaseShortEntry,
  ShoppingShortEntry,
} from "../api/__generated__/api";
import { EventSearch } from "./EventSearch";
import PurchaseDetailed from "./PurchaseItem";
import "./ShoppingDetail.css";
import MyModal from "./UI/modal/MyModal";
import Button from "@mui/material/Button";
import PurchaseForm from "./PurchaseForm";
import { Link } from "react-router-dom";

// interface PurchaseFormProps {
//   newPurchase: PurchaseShortEntry;
// }

interface ShoppingDetailProps {
  // title: string;
  shoppingDetail: GetShoppingEntry;
  // purchasesList: PurchaseShortEntry[];
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
            <PurchaseDetailed purchaseShort={purchase} />
          </li>
        )) ?? [],
    [purchases, inputValue]
  );

  return (
    <>
      <div className="purchase__short">
        {/* <MyModal visible={modal} setVisible={setModal}>
          <PurchaseForm add={addPurchase} />
        </MyModal> */}
        <Button
          component={Link}
          color="success"
          size="small"
          to={`/events/${event.id}`}
        >
          Back
        </Button>
        {/* <h2>{purchasesList.shopping}</h2>
        <Button color="success" onClick={() => setModal(true)}>
          +
        </Button> */}
      </div>
      <div className="shopping__detailed">
        {/* <PurchaseShort /> */}
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

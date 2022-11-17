import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/myApi";
import { GetPurchaseEntry } from "../api/__generated__/api";
import PurchaseForm from "../components/PurchaseForm";
import Loader from "../components/UI/loader/Loader";
import { IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function EditPurchasePage() {
  const navigate = useNavigate();
  let params = useParams();
  const eventId = params.eventId;
  const shoppingId = params.shoppingId;
  const purchaseId = params.purchaseId;
  const onCreatedShop = (): void => {
    navigate(`/events/${eventId}/shoppings/${shoppingId}`);
  };

  const [purchase, setPurchase] = useState<GetPurchaseEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!purchaseId) return;
    setLoading(true);

    api.api
      .purchasesDetail(purchaseId, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setPurchase(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (!purchase) return <Loader />;

  return (
    <div className="page">
      <div className="page__header">
        <IconButton
          component={Link}
          color="success"
          size="small"
          to={`/events/${eventId}/shoppings/${shoppingId}`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <h2>Редактирование товара</h2>
      </div>

      <PurchaseForm onCreated={onCreatedShop} initialPurchaseEntry={purchase} />
    </div>
  );
}

export default EditPurchasePage;

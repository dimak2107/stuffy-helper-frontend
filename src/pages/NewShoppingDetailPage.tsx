import Button from "@mui/material/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import NewShopping from "../components/NewShopping";
import NewShoppingDetail from "../components/NewShoppingDetail";

function NewShoppingDetailPage() {
  const navigate = useNavigate();
  let params = useParams();
  const eventId = params.eventId;
  const shoppingId = params.shoppingId;
  const onCreatedShop = (id: string): void => {
    navigate(`/events/${eventId}/shoppings/${shoppingId}`);
  };

  return (
    <div className="page">
      <div className="page__header">
        <Button
          component={Link}
          color="success"
          size="small"
          to={`/events/${eventId}/shoppings/${shoppingId}`}
        >
          Back
        </Button>
        <h2>Добавление товара</h2>
      </div>

      <NewShoppingDetail onCreated={onCreatedShop} />
    </div>
  );
}

export default NewShoppingDetailPage;

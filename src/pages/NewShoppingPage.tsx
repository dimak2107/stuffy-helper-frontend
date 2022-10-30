import Button from "@mui/material/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import NewShopping from "../components/NewShopping";

function NewShoppingPage() {
  const navigate = useNavigate();
  let params = useParams();
  const eventId = params.eventId;
  const onCreatedShop = (id: string): void => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="page">
      <div className="page__header">
        <Button
          component={Link}
          color="success"
          size="small"
          to={`/events/${eventId}`}
        >
          Back
        </Button>
        <h2 className="page__header">Создание покупки</h2>
      </div>

      <NewShopping onCreated={onCreatedShop} />
    </div>
  );
}

export default NewShoppingPage;

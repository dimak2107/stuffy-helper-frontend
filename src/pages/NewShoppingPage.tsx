import { IconButton } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import NewShopping from "../components/NewShopping";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
        <IconButton
          component={Link}
          color="success"
          size="small"
          to={`/events/${eventId}`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <h2 className="page__header">Создание покупки</h2>
      </div>

      <NewShopping onCreated={onCreatedShop} />
    </div>
  );
}

export default NewShoppingPage;

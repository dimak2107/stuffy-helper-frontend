import ShoppingDetail from "../components/ShoppingDetail";
import { useParams } from "react-router-dom";
import { GetShoppingEntry } from "../api/__generated__/api";
import { useEffect, useState } from "react";
import api from "../api/myApi";

const ShoppingDetailPage = () => {
  const [shoppingDetail, setShoppingDetail] = useState<GetShoppingEntry | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let params = useParams();
  const shoppingId = params.shoppingId;

  useEffect(() => {
    if (!shoppingId) return;

    api.api
      .shoppingsDetail(shoppingId, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setShoppingDetail(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (!shoppingDetail) return <div className="kek">Загрузка...</div>;

  return (
    <div className="">
      <ShoppingDetail shoppingDetail={shoppingDetail} />
    </div>
  );
};

export default ShoppingDetailPage;

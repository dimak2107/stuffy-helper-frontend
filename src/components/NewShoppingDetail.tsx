// import "./NewShoppingDetail.css";

import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
import { UpsertPurchaseEntry } from "../api/__generated__/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const NewShoppingDetail = ({
  onCreated,
}: {
  onCreated?: (id: string) => void;
}) => {
  let params = useParams();
  const shoppingId = params.shoppingId;
  const [queryData, setQueryData] = useState<UpsertPurchaseEntry>({
    name: "",
    cost: 0,
    weight: 0,
    count: 0,
    shoppingId: "",
    purchaseTags: [],
    unitTypeId: "",
    isActive: true,
  });
  const [loading, setLoading] = useState(false);
  const unitTypes = [
    {
      id: "8cb4c090-4317-4737-9253-4a6002f24837",
      name: "Шт.",
    },
    {
      id: "a88861db-1c14-4f11-8e3d-3bd09ffb6f90",
      name: "Кг.",
    },
    {
      id: "b1b072f5-fc8f-4a67-8e25-caae191992b0",
      name: "л",
    },
  ];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (!queryData.name) return;
    // if (!queryData.cost) return;
    // if (!queryData.purchaseTags) return;
    // if (!queryData.unitTypeId) return;
    setLoading(true);

    queryData.shoppingId = shoppingId;
    queryData.purchaseTags = ["еда"];
    queryData.isActive = true;

    try {
      const data = await api.api.purchasesCreate(queryData);
      console.log(data);
      if (onCreated) {
        onCreated(queryData.shoppingId);
      }
    } catch (error) {
      console.log("fiasko");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="page__form" onSubmit={onSubmit}>
      <div className="form__inputs">
        <TextField
          className="input__style"
          id="outlined-required"
          label="Название товара"
          margin="dense"
          value={queryData.name}
          onChange={(e) => setQueryData({ ...queryData, name: e.target.value })}
        />

        <TextField
          className="input__style"
          id="outlined-required"
          label="Количество товара"
          margin="dense"
          value={queryData.count}
          onChange={(e) =>
            setQueryData({ ...queryData, count: +e.target.value })
          }
        />

        <TextField
          className="input__style"
          id="outlined-required"
          label="Вес товара"
          margin="dense"
          value={queryData.weight}
          onChange={(e) =>
            setQueryData({ ...queryData, weight: +e.target.value })
          }
        />

        <TextField
          className="input__style"
          id="outlined-select-currency"
          margin="dense"
          select
          label="Единица измерения"
          value={queryData.unitTypeId}
          onChange={(e) =>
            setQueryData({ ...queryData, unitTypeId: e.target.value })
          }
        >
          {unitTypes.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="input__style"
          id="outlined-required"
          label="Стоимость товара"
          margin="dense"
          value={queryData.cost}
          onChange={(e) =>
            setQueryData({ ...queryData, cost: +e.target.value })
          }
        />

        <div className="page__btn">
          <Button variant="contained" type="submit" disabled={loading}>
            Отправить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewShoppingDetail;

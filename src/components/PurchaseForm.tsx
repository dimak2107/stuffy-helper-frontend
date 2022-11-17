// import "./NewShoppingDetail.css";

import { Autocomplete, Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import api from "../api/myApi";
import {
  AddPurchaseEntry,
  GetPurchaseEntry,
  UnitTypeShortEntry,
  UpdatePurchaseEntry,
} from "../api/__generated__/api";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardOptionKeySharp } from "@mui/icons-material";

// TODO: https://formik.org/docs/examples/with-material-ui
const PurchaseForm = ({
  onCreated,
  initialPurchaseEntry,
}: {
  onCreated?: (id: string) => void;
  initialPurchaseEntry?: GetPurchaseEntry;
}) => {
  let params = useParams();
  const shoppingId = params.shoppingId!;
  const [inputValue, setInputValue] = useState("");

  const [name, setName] = useState(initialPurchaseEntry?.name ?? "");
  const [cost, setCost] = useState(initialPurchaseEntry?.cost ?? "");
  const [amount, setAmount] = useState(initialPurchaseEntry?.amount ?? "");
  const [purchaseTags, setPurchaseTags] = useState(
    initialPurchaseEntry?.purchaseTags?.map((tag) => tag.name) ?? []
  );
  // purchaseTags.push("еда");
  const [unitType, setUnitType] = useState<UnitTypeShortEntry | null>(
    initialPurchaseEntry?.unitType ?? null
  );
  const isActive = true;

  const [loading, setLoading] = useState(false);
  const [unitTypes, setUnitTypes] = useState<UnitTypeShortEntry[]>([]);

  const [error, setError] = useState();

  useEffect(() => {
    api.api
      .unitTypesList(undefined, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setUnitTypes(response.data?.data ?? []);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!shoppingId) return;
    // if (!queryData.name) return;
    // if (!queryData.cost) return;
    // if (!queryData.purchaseTags) return;
    // if (!queryData.unitTypeId) return;
    setLoading(true);

    try {
      if (initialPurchaseEntry) {
        if (!unitType) return;

        const payload: UpdatePurchaseEntry = {
          name,
          cost: Number(cost),
          amount: Number(amount),
          // purchaseTags,
          unitTypeId: unitType.id,
        };
        const data = await api.api.purchasesPartialUpdate(
          initialPurchaseEntry.id,
          payload
        );
      } else {
        if (!unitType) return;

        const payload: AddPurchaseEntry = {
          name,
          cost: Number(cost),
          amount: Number(amount),
          shoppingId,
          // purchaseTags,
          unitTypeId: unitType.id,
        };
        const data = await api.api.purchasesCreate(payload);
      }

      if (onCreated) {
        onCreated(shoppingId);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          className="input__style"
          id="outlined-required"
          label="Количество товара"
          margin="dense"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Autocomplete
          value={unitType}
          onChange={(event: any, newValue) => {
            setUnitType(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={unitTypes}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Единица измерения"
              margin="dense"
              className="input__style"
            />
          )}
        />

        <TextField
          className="input__style"
          id="outlined-required"
          label="Стоимость товара"
          margin="dense"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
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

export default PurchaseForm;

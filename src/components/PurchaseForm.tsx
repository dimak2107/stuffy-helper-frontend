import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  PurchaseShortEntry,
  UpsertPurchaseEntry,
} from "../api/__generated__/api";
import axios from "axios";
import api from "../api/myApi";
// import PostItem from "./components/PostItem";

interface PurchaseFormProps {
  create: PurchaseShortEntry;
}

const PurchaseForm = ({ add }: PurchaseFormProps) => {
  const [purchase, setPurchase] = useState({
    name: "",
    cost: "",
    weight: "",
    count: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  // const addNewPurchase = (e) => {
  //   e.preventDefault();

  //   // const newPurchase = { ...purchase, id: Date.now() };

  //   add(purchase);
  //   setPurchase({ name: "", cost: "", weight: "", count: "" });
  // };

  // const addNewPurchase = (data: UpsertPurchaseEntry) => {
  //   api.api
  //     .purchasesCreate(data, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((response) => {
  //       // localStorage.setItem("token", `${response.headers.token}`);
  //       // navigate("/events");
  //       // history.push("/");
  //     })
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // };

  // const addNewPurchase = async (data: UpsertPurchaseEntry) => {
  //   const { data: response } = await axios.post("", data);
  // };

  // console.log(purchase);

  return (
    <form>
      <TextField
        className="input__style"
        id="outlined-required"
        label="наименование"
        margin="dense"
        value={purchase.name}
        onChange={(e) => setPurchase({ ...purchase, name: e.target.value })}
      />
      <TextField
        className="input__style"
        id="outlined-required"
        label="стоимость"
        margin="dense"
        value={purchase.cost}
        onChange={(e) => setPurchase({ ...purchase, cost: e.target.value })}
      />
      <TextField
        className="input__style"
        id="outlined-required"
        label="вес"
        margin="dense"
        value={purchase.weight}
        onChange={(e) => setPurchase({ ...purchase, weight: e.target.value })}
      />
      <TextField
        className="input__style"
        id="outlined-required"
        label="кол-во"
        margin="dense"
        value={purchase.count}
        onChange={(e) => setPurchase({ ...purchase, count: e.target.value })}
      />
      {/* <TextField
        className="input__style"
        id="outlined-required"
        label="стоимость товара"
        margin="dense"
        value={purchase.unittype}
        onChange={(e) => setPurchase({ ...purchase, unittype: e.target.value })}
      /> */}

      {/* <Button onClick={addNewPurchase}>Добавить покупку</Button> */}
    </form>
  );
};

export default PurchaseForm;

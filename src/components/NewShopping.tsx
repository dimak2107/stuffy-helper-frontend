import { createRef, FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AddShoppingEntry } from "../api/__generated__/api";
import { useParams } from "react-router-dom";
import api from "../api/myApi";
// import "./NewShopping.css";

function NewShopping({ onCreated }: { onCreated?: (id: string) => void }) {
  let params = useParams();
  const eventId = params.eventId;
  const [queryData, setQueryData] = useState<AddShoppingEntry>({
    shoppingDate: "",
    participantId: "",
    eventId: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  // const fileInputRef = createRef<HTMLInputElement>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!queryData.shoppingDate) return;
    setLoading(true);

    queryData.participantId = "f9d01154-5613-4f9c-ace2-54ed3bb88278";
    queryData.eventId = eventId;

    try {
      const data = await api.api.shoppingsCreate(queryData);
      if (onCreated) {
        // onCreated(data.data.id);
        onCreated(queryData.eventId);
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
          label="Название магазина"
          margin="dense"
          value={queryData.description}
          onChange={(e) =>
            setQueryData({ ...queryData, description: e.target.value })
          }
        />
        <DesktopDatePicker
          className="input__style"
          label="Дата закупа"
          inputFormat="DD/MM/YYYY"
          value={queryData.shoppingDate}
          onChange={(e) => setQueryData({ ...queryData, shoppingDate: e })}
          renderInput={(params) => (
            <TextField margin="dense" id="outlined-required" {...params} />
          )}
        />
        {/* <TextField
          className="input__style"
          id="outlined-required"
          label="Ответственное лицо"
          margin="dense"
          value={participantId}
          onChange={(participantId) => {
            setParticipantId("d1ace3e0-d528-4ace-8173-23202f7f1807");
            setEventId("9201f06a-67c7-4437-8b2a-781ea24999a2");
          }}
        /> */}

        {/* <input className="photo__loader" type="file" ref={fileInputRef} /> */}
        <div className="page__btn">
          <Button variant="contained" type="submit" disabled={loading}>
            Отправить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewShopping;

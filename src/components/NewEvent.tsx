import { createRef, FormEvent, useState } from "react";
import api from "../api/myApi";
import useAuth from "./AuthProvider";
import { Button, TextField } from "@mui/material";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";

function NewEvent({ onCreated }: { onCreated?: (id: string) => void }) {
  const [name, setName] = useState("");
  const [dateStart, setDateStart] = useState<Dayjs | null>(dayjs());
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = createRef<HTMLInputElement>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!dateStart) return;

    setLoading(true);

    const query = {
      name: name,
      eventDateStart: dateStart.utc().format(),
      description: description,
      eventDateEnd: dateEnd?.utc().format(),
      file: fileInputRef?.current?.files?.[0]
        ? fileInputRef.current.files[0]
        : "",
    };

    try {
      const { data } = await api.api.eventsCreate(query);

      if (onCreated) {
        onCreated(data.id);
      }
    } catch (error) {
      console.log("fiasko");
    } finally {
      setLoading(false);
    }
    // auth.login({ username, password });
  }

  // const getEvents = api.api.eventsList;

  return (
    <form className="page__form" onSubmit={onSubmit}>
      <div className="form__inputs">
        <TextField
          className="input__style"
          id="outlined-required"
          label="Название события"
          margin="dense"
          value={name}
          onChange={(name) => setName(name.target.value)}
        />
        <DesktopDatePicker
          className="input__style"
          label="Дата начала события"
          inputFormat="DD/MM/YYYY"
          value={dateStart}
          onChange={(e) => setDateStart(e)}
          renderInput={(params) => (
            <TextField margin="dense" id="outlined-required" {...params} />
          )}
        />
        <DesktopDatePicker
          className="input__style"
          label="Дата окончания события"
          inputFormat="DD/MM/YYYY"
          value={dateEnd}
          onChange={(e) => setDateEnd(e)}
          renderInput={(params) => (
            <TextField margin="dense" id="outlined-required" {...params} />
          )}
        />
        <TextField
          className="input__style"
          id="outlined-required"
          label="Описание события"
          margin="dense"
          value={description}
          onChange={(description) => setDescription(description.target.value)}
        />

        <input className="photo__loader" type="file" ref={fileInputRef} />
        <div className="page__btn">
          <Button variant="contained" type="submit" disabled={loading}>
            Отправить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewEvent;

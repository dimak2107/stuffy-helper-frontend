import { createRef, FormEvent, useState } from "react";
import api from "../api/myApi";
import useAuth from "./AuthProvider";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
    };

    const kekw: { file?: File } = {};

    if (fileInputRef?.current?.files?.[0]) {
      kekw.file = fileInputRef.current.files[0];
    }

    try {
      const { data } = await api.api.eventsCreate(query, kekw);

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
          label="Дата начала события"
          inputFormat="DD/MM/YYYY"
          value={dateStart}
          onChange={(e) => setDateStart(e)}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Дата окончания события"
          inputFormat="DD/MM/YYYY"
          value={dateEnd}
          onChange={(e) => setDateEnd(e)}
          renderInput={(params) => <TextField {...params} />}
        />
        <input type="file" ref={fileInputRef} />
        <div className="page__btn">
          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            className="page__btn"
          >
            Отправить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewEvent;

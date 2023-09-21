import { FC, useState, useEffect, useCallback, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// Types
import { Person } from "types/person";

// Styles
import classes from "./PersonCard.module.scss";

interface IProps {
  data: Person;
}

const PersonCard: FC<IProps> = ({ data }) => {
  const [name, setName] = useState<string>(data.name);
  const [number, setNumber] = useState<number | undefined>(data.number);
  const [status, setStatus] = useState<boolean | undefined>(data.status);
  const [trainer, setTrainer] = useState<string | undefined>(data.trainer);
  const [cors, setCors] = useState<string>(data.cors);

  const handleUpdate = useCallback(() => {
    setName(data.name);
    setNumber(data.number);
    setStatus(data.status);
    setTrainer(data.trainer);
    setCors(data.cors);
  }, [data]);

  const setNameByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setNumberByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setStatusByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setTrainerByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setCorsByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <div>
      <div className={classes.textInfo}>
        <article>
          <section>
            <h3>Номер договора:</h3>
            <TextField
              variant="standard"
              size="medium"
              value={number}
              onChange={setNumberByRow}
            />
          </section>
          <section>
            <p>ФИО:</p>
            <TextField
              variant="standard"
              value={name}
              onChange={setNameByRow}
            />
          </section>
          <section>
            <p>Статус:</p>
            <TextField
              variant="standard"
              select
              onChange={setStatusByRow}
              value={status}
            >
              <MenuItem value={"true"}>Оплачено</MenuItem>
              <MenuItem value={"false"}>Не оплачено</MenuItem>
            </TextField>
          </section>
          <section>
            <p>Инструктор:</p>
            <TextField
              variant="standard"
              value={trainer}
              onChange={setTrainerByRow}
            />
          </section>
          <section>
            <p>Расчет:</p>
            <TextField
              variant="standard"
              value={cors}
              onChange={setCorsByRow}
            />
          </section>
        </article>
        <img src="/src/assets/vectorCat.jpg" alt="avatar" />
      </div>
    </div>
  );
};

export default PersonCard;

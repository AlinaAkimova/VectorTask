import { FC, useState, useEffect, useCallback, ChangeEvent } from "react";

// components
import DatePickerField from "components/DatePickerField/DatePickerField";

// mui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// Types
import { Person, Sex, sexOptions } from "types/person";

// dayjs
import dayjs, { Dayjs } from 'dayjs';


// Styles
import classes from './PersonCard.module.scss';
import { Select, SelectChangeEvent } from "@mui/material";

interface IProps {
  data: Person;
}

const findSexByValue = (value: string): Sex => {
  const sex = sexOptions.find(s => s.value === value)?.option;
  return sex ? sex : Sex.FEMALE;
}

const PersonCard: FC<IProps> = ({data}) => {
    const [firstName, setFirstName] = useState<string>(data.firstName);
    const [lastName, setLastName] = useState<string>(data.lastName);
    const [patronymic, setPatronymic] = useState<string>(data.patronymic);
    const [sex, setSex] = useState<Sex>(data.sex);
    const [number, setNumber] = useState<number | undefined>(data.contract.number);
    // const [status, setStatus] = useState<boolean | undefined>(data.status);
    const [trainer, setTrainer] = useState<string | undefined>(data.trainer);
    const [cors, setCors] = useState<string>(data.cors);
    const [contractDate, setContractDate] = useState<Dayjs | null>(dayjs(data.contract.contractDate));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(data.contract.endDate));
    const [deductionDate, setDeductionDate] = useState<Dayjs | null>(dayjs(data.contract.deductionDate));

    const handleUpdate = useCallback(() => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPatronymic(data.patronymic);
      setNumber(data.contract.number);
      setSex(data.sex);
      // setStatus(data.status);
      setTrainer(data.trainer);
      setCors(data.cors);
      setContractDate(dayjs(data.contract.contractDate));
      setEndDate(dayjs(data.contract.endDate));
      setDeductionDate(dayjs(data.contract.deductionDate));
    }, [data]);

    const setFirstNameByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    }, []);

    const setLastNameByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    }, []);

    const setPatronymicByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setPatronymic(e.target.value);
    }, []);

    const setSexByRow = useCallback((e: SelectChangeEvent) => {
      setSex(findSexByValue(e.target.value as string));
    }, []);

    // const setStatusByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //   console.log(e);
    //   setStatus(true);
    // }, []);

    const setNumberByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(e.target.value));
    }, []);

    const setTrainerByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setTrainer(e.target.value);
    }, []);

    const setCorsByRow = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setCors(e.target.value);
    }, []);

    const setContractDateByRow = useCallback((e: Dayjs | null) => {
      setContractDate(e);
    }, []);

    const setEndDateByRow = useCallback((e: Dayjs | null) => {
      setEndDate(e);
    }, []);

    const setDeductionDateByRow = useCallback((e: Dayjs | null) => {
      setDeductionDate(e);
    }, []);
  
    useEffect(() => {
      handleUpdate();
    }, [handleUpdate]);

    return(
        <div>
          <div className={classes.textInfo}>
            <article>
              <section>
                <TextField
                  label="Номер договора"
                  variant="standard"
                  size="medium"
                  value={number}
                  onChange={setNumberByRow}
                />
                <DatePickerField label="Дата договора" value={contractDate} setValue={setContractDateByRow}/>
                <DatePickerField label="Окончание" value={endDate} setValue={setEndDateByRow}/>
                <DatePickerField label="Отчисление" value={deductionDate} setValue={setDeductionDateByRow}/>
              </section>
              <section>
                <TextField
                  label="Фамилия"
                  variant="standard"
                  value={lastName}
                  onChange={setLastNameByRow}
                  required
                />
                <TextField
                  label="Имя"
                  variant="standard"
                  value={firstName}
                  onChange={setFirstNameByRow}
                  required
                />
                <TextField
                  label="Отчество"
                  variant="standard"
                  value={patronymic}
                  onChange={setPatronymicByRow}
                />
              </section>
              <section>
              <Select
                value={sexOptions.find(s => s.option === sex)?.value}
                label="Пол"
                onChange={setSexByRow}
              >
                {
                  sexOptions.map((s) => {
                    return <MenuItem>{s.value}</MenuItem>
                  })
                }
              </Select>
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
            <img src="/src/assets/vectorCat.jpg" alt='avatar' />
          </div>
        </div>
    )
}

export default PersonCard;
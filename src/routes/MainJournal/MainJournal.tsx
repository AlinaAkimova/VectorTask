import { FC } from "react";

// Components
import PeopleList from "components/PeopleList/PeopleList";
import { Button } from "@mui/material";

// Styles
import classes from './MainJournal.module.scss';

const MainJournal: FC = () => {
    return(
        <>
          <div className={classes.journalHeader}>
            <h1>Список учеников</h1>
            <Button variant="contained">Добавить ученика</Button>
          </div>
          <PeopleList />
        </>
    )
}

export default MainJournal;

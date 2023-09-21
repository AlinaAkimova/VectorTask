import { FC } from "react";

// Components
import PeopleList from "components/PeopleList/PeopleList";
import { Button } from "@mui/material";

// Layout
import MainLayout from "layouts/MainLayout/MainLayout";

// Styles
import classes from './MainJournal.module.scss';

const MainJournal: FC = () => {
    return(
        <MainLayout>
          <div className={classes.journalHeader}>
            <h1>Список учеников</h1>
            <Button variant="contained">Добавить ученика</Button>
          </div>
          <PeopleList />
        </MainLayout>
    )
}

export default MainJournal;

import { FC, useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Stores
import peopleStore from "store/PeopleStore";

// Styles
import classes from './PeopleList.module.scss';

const PeopleList: FC = observer(() => {
    const { people, loadPeople } = peopleStore;
    const route = useNavigate();

    useEffect(() => {
      loadPeople();
    }, [loadPeople])
  
    return(
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Номер договора</TableCell>
              <TableCell align="center">ФИО</TableCell>
              <TableCell align="center">Статус</TableCell>
              <TableCell align="center">Инструктор</TableCell>
              <TableCell align="center">Расчет</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people?.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => route(`/people/${row.id}`)}
              >
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.status? 'Оплачено' : 'Не оплачено'}</TableCell>
                <TableCell align="center">{row.trainer}</TableCell>
                <TableCell align="center">{row.cors}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
})

export default PeopleList;

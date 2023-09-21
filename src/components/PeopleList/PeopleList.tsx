import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Stores
import peopleStore from "store/PeopleStore";

// Styles
import classes from "./PeopleList.module.scss";

const PeopleList: FC = observer(() => {
  const { people, loadPeople } = peopleStore;
  const route = useNavigate();

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableCellHead}>
              Номер договора
            </TableCell>
            <TableCell align="center" className={classes.tableCellHead}>
              ФИО
            </TableCell>
            <TableCell align="center" className={classes.tableCellHead}>
              Статус
            </TableCell>
            <TableCell align="center" className={classes.tableCellHead}>
              Инструктор
            </TableCell>
            <TableCell align="center" className={classes.tableCellHead}>
              Расчет
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people?.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => route(`/people/${row.id}`)}
              className={classes.tableRow}
              hover
              sx={{
                ".MuiTableCell-root": {
                  borderBottom: "none",
                },
              }}
            >
              <TableCell align="center" className={classes.typography}>
                {row.number}
              </TableCell>
              <TableCell align="center" className={classes.typography}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.typography}>
                {row.status ? "Оплачено" : "Не оплачено"}
              </TableCell>
              <TableCell align="center" className={classes.typography}>
                {row.trainer}
              </TableCell>
              <TableCell align="center" className={classes.typography}>
                {row.cors}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default PeopleList;

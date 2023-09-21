import { FC, useCallback, ChangeEvent, useMemo, useEffect } from "react";

import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// Styles
import classes from "./SearchBase.module.scss";

const SearchBase: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchParams({ ...searchParams, nameStarts: e.target.value });
    },
    [setSearchParams, searchParams]
  );

  const debouncedResults = useMemo(() => {
    return debounce(searchChange, 1500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={classes.pageNameAndSearch}>
      <Button variant="contained">Все группы</Button>
      <Button variant="contained">Добавить ученика</Button>
      <div className={classes.searchBase}>
        <InputBase
          fullWidth
          className={classes.openBase}
          defaultValue={searchParams.get("nameStarts")}
          onChange={debouncedResults}
          placeholder="Поиск договора..."
          inputProps={{
            className: classes.input,
          }}
        />
      </div>
      <div>
        <AutorenewIcon />
        <FilterAltIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default SearchBase;

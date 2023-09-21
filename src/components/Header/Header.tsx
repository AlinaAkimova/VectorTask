import { FC } from "react";

import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

// Styles
import classes from './Header.module.scss';

const Header: FC = () => {
  return (
      <Toolbar className={classes.toolbar}>
        <p>Admin Alina</p>
        <Avatar>AA</Avatar>
      </Toolbar>
  );
};
export default Header;

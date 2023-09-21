import { FC } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Chip from "@mui/material/Chip";

// Styles
import classes from "./SideMenu.module.scss";

const SideMenu: FC = () => {
  return (
    <List
      component="nav"
      className={classes.menuContainer}
      sx={{ mr: 1, ml: 1 }}
    >
      <ListItemButton className={classes.listItem}>
        <div className={classes.menuCard}>
          <Chip label="B" color="primary" variant="outlined" size="small" />
          <Chip
            label="Гагарина"
            color="primary"
            variant="outlined"
            size="small"
          />
          <p className={classes.typography}>16B-20</p>
          <div className={classes.redTypography}>Идет обучение</div>
          <div className={classes.typography}>Курсантов 10</div>
        </div>
      </ListItemButton>
      <ListItemButton
        className={classes.listItem}
        sx={{ backgroundColor: "#fff" }}
      >
        <div className={classes.menuCard}>
          <Chip
            label="Гостехнадзор А"
            color="primary"
            variant="outlined"
            size="small"
          />
          <Chip
            label="Калачинск"
            color="primary"
            variant="outlined"
            size="small"
          />
          <p className={classes.typography}>16T-20</p>
          <div className={classes.redTypography}>Группа формируется</div>
          <div className={classes.typography}>Курсантов 10</div>
        </div>
      </ListItemButton>
      <ListItemButton className={classes.listItem}>
        <div className={classes.menuCard}>
          <Chip
            label="Гостехнадзор А"
            color="primary"
            variant="outlined"
            size="small"
          />
          <Chip
            label="Калачинск"
            color="primary"
            variant="outlined"
            size="small"
          />
          <p className={classes.typography}>02A-28</p>
          <div className={classes.redTypography}>Идет обучение</div>
          <div className={classes.typography}>Курсантов 10</div>
        </div>
      </ListItemButton>
      <ListItemButton>
        <div className={classes.menuCard}>
          <Chip label="B" color="primary" variant="outlined" size="small" />
          <Chip
            label="Гагарина"
            color="primary"
            variant="outlined"
            size="small"
          />
          <p className={classes.typography}>16T-30</p>
          <div className={classes.redTypography}>Идет обучение</div>
          <div className={classes.typography}>Курсантов 10</div>
        </div>
      </ListItemButton>
    </List>
  );
};

export default SideMenu;

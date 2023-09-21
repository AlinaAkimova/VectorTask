import { FC, ReactNode } from "react";

import Box from "@mui/material/Box";

// Components
import Header from "components/Header/Header";
import SideMenu from "components/SideMenu/SideMenu";
import SearchBase from "components/SearchBase/SearchBase";

// Styles
import classes from "./MainLayout.module.scss";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Box className={classes.containerMain}>
      <Header />
      <SearchBase />
      <section className={classes.containerChildren}>
        <SideMenu />
        {children}
      </section>
    </Box>
  );
};

export default MainLayout;

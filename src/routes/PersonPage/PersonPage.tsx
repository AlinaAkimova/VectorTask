import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

// Components
import PersonCard from "components/PersonCard/PersonCard";

// mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Stores
import peopleStore from "store/PeopleStore";

// Styles
import classes from "./PersonPage.module.scss";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.tabpanel}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

const selectTab = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const PersonPage: FC = observer(() => {
  const { personId } = useParams();
  const { person } = peopleStore;

  const [tabIndex, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    peopleStore.loadPerson(Number(personId));
  }, [personId]);

  return (
    <>
      <section className={classes.tabs}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="tabs">
          <Tab label="Главное" {...selectTab(0)} />
          <Tab label="Личные" {...selectTab(1)} />
          <Tab label="Заказчик" {...selectTab(2)} />
        </Tabs>
      </section>
      <section className={classes.tabsContainer}>
        <TabPanel value={tabIndex} index={0}>
          {person ? <PersonCard data={person} /> : "not found"}
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          Заглушка личных
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          Заглушка заказчика
        </TabPanel>
      </section>
    </>
  );
});

export default PersonPage;

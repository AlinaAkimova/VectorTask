import { FC } from "react";

// Components
import PeopleList from "components/PeopleList/PeopleList";

// Layout
import MainLayout from "layouts/MainLayout/MainLayout";

const MainJournal: FC = () => {
  return (
    <MainLayout>
      <PeopleList />
    </MainLayout>
  );
};

export default MainJournal;

import { FC, useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

// Components
import PersonCard from "components/PersonCard/PersonCard";

// Stores
import peopleStore from "store/PeopleStore";

const PersonPage: FC = observer(() => {
    const { personId } = useParams();
    const { person } = peopleStore;

    useEffect(() => {
        peopleStore.loadPerson(Number(personId));
    }, [personId])

    return(
      <>
        {person ? (<PersonCard data={person} />) : 'not found'}
      </>
    )
})

export default PersonPage;
import { runInAction, makeObservable, observable, configure } from 'mobx';
configure({enforceActions: 'observed'});

// API
// import { getPeople, getPerson } from 'api/personApi';

// Types
import { Person } from 'types/person';

// mock
import { mocki } from "mock";

class PeopleStore {
  people: Person[] = [];
  person: Person | null = null;

  constructor() {
    makeObservable(this, {
      people: observable,
      person: observable
    })
  }

  loadPeople = async () => {
    try {
      // const { data } = await getPeople();
      const data = mocki;
      runInAction(() => {
        this.people = data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  loadPerson = async (id: number) => {
    try {
      // const { data } = await getPerson(id);
      const data = mocki.find((element) => element.id === id);
      runInAction(() => {
        this.person = data? data : null;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const peopleStore = new PeopleStore();

export default peopleStore;
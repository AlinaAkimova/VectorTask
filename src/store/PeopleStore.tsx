import { runInAction, makeObservable, observable, configure } from 'mobx';
configure({enforceActions: 'observed'});

// API
// import { getPeople, getPerson } from 'api/personApi';

// Types
import { Person } from 'types/person';

const peopleMock = [
  {id:1, number: 44567, name:'Акимова Алина', status: true, trainer: 'Алексей', cors: '4'},
  {id:2, number: 44567, name:'Иван Иванов', status: false, trainer: 'Алексей', cors: '2'},
  {id:3, number: 44568, name:'Денис Васильев', status: true, trainer: 'Алексей', cors: '3'},
  {id:4, number: 44569, name:'Кирилл Петров', status: false, trainer: 'Алексей', cors: '6'},
  {id:5, number: 44560, name:'Катерина Пирожкова', status: true, trainer: 'Алексей', cors: '1'},
  {id:6, number: 44561, name:'Сергей Иванов', status: false, trainer: 'Алексей', cors: '3'},
  {id:7, number: 44562, name:'Петр Васильев', status: true, trainer: 'Алексей', cors: '1'},
]

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
      const data = peopleMock;
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
      const data = peopleMock.find((element) => element.id === id);
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
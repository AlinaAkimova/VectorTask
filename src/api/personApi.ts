import axios from 'api/helpers/axios';

import { Person } from 'types/person';

interface IPeopleResponse {
  data: Person[];
}

interface IPersonResponse {
  data: Person;
}

interface IPersonDelete {
  id: string;
}

export const getPeople = async () =>
  axios.get<IPeopleResponse>(`/people`);

export const getPerson = async (personId: number) =>
  axios.get<IPersonResponse>(`/people/${personId}`);

export const addPerson = async (personId: number, request: Person) =>
  axios.post<IPersonResponse>(`/people/${personId}`, request);

export const deletePerson = async (personId: number) =>
  axios.delete<IPersonDelete>(`/people/${personId}`, { data: { personId } });
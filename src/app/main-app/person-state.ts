import Person from './person-model';

export default class PersonState {
    Persons: Array<Person>;
    PersonError: Error;
}

export const initializeState = (): PersonState => {
    return { Persons: Array<Person>(), PersonError: null };
}; 
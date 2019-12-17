import { EMPLOYEES_LOADED } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const employeesAdded = (newemployee) => {
  return {
    type: EMPLOYEES_ADDED,
    payload: {
      newemployee
    }
  };
}
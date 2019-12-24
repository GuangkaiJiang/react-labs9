import { EMPLOYEES_ADDED } from './constants';
import { FETCHING } from './constants';
import { FETCHING_OK } from './constants';
import { FETCHING_ERROR } from './constants';
export const employeesAdded = (newemployee) => {
  return {
    type: EMPLOYEES_ADDED,
    payload: {
      newemployee
    }
  };
}

export const fetching = () => {
  return {
    type: FETCHING,
    payload: {
    }
  };
}

export const fetchingOK = (employees) => {
  return {
    type: FETCHING_OK,
    payload: {
      employees
    }
  };
}

export const fetchingError = (error) => {
  return {
    type: FETCHING_ERROR,
    payload: {
      error
    }
  };
}

export const fetchEmployeesModifyStore = () => {
  return dispatch => {
    dispatch(fetching());
    return fetch("http://localhost:3004/employees")
      .then(data => data.json())
      .then(employees => dispatch(fetchingOK(employees)),error => dispatch(fetchingError(error)))
    };
}
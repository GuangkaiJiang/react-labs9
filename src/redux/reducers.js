import { EMPLOYEES_ADDED } from './constants';
import { FETCHING } from './constants';
import { FETCHING_OK } from './constants';
import { FETCHING_ERROR } from './constants';
export const initialState = {
  employees: [],
  loading: false,
  error: null
};

// Read this: https://redux.js.org/basics/reducers
//state = initialState is setting default argument, not assign!
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_ADDED: {
      const { newemployee } = action.payload;
      return {...state, employees :[...state.employees, newemployee]}
    }
    case FETCHING: {
      return {...state,loading: true,error: null};
    }
    case FETCHING_OK: {
      const { employees } = action.payload;
      return {...state,employees:employees,loading: false,error: null};
    }  
    case FETCHING_ERROR: {
      const { error } = action.payload;
      return {...state,loading: false,error: error};
    }
    default:
        return state
  }
}

export default appReducer;
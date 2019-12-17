import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEES_ADDED } from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return {...state,employees}
    }
    case EMPLOYEES_ADDED: {
      const { newemployee } = action.payload;
      return {...state, newemployee}
    }


    default:
        return state
  }
}

export default appReducer;
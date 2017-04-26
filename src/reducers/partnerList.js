import { LIST_PARTNERS } from '../actions';

import { PENDING, SUCCESS, ERROR } from '../actions/AsyncAction';

const initialState = {
  list: [],
  isPending: false,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_PARTNERS + PENDING:
      return Object.assign({}, state, {
        isPending: true,
        isError: false,
        error: null
      });
    case LIST_PARTNERS + SUCCESS:
      return Object.assign({}, state, {
        list: action.data.partners,
        isPending: false,
        isError: false
      });
    case LIST_PARTNERS + ERROR:
      return Object.assign({}, state, {
        list: [],
        isPending: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};

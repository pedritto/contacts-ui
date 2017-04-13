import { LIST_CONTACTS } from '../actions';

import { PENDING, SUCCESS, ERROR } from '../actions/AsyncAction';

const initialState = {
  list: [],
  count: 0,
  isPending: false,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_CONTACTS + PENDING:
      return Object.assign({}, state, {
        isPending: true,
        isError: false,
        error: null
      });
    case LIST_CONTACTS + SUCCESS:
      return Object.assign({}, state, {
        list: action.data.contacts,
        count: action.data.count,
        isPending: false,
        isError: false
      });
    case LIST_CONTACTS + ERROR:
      return Object.assign({}, state, {
        list: [],
        count: 0,
        isPending: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};

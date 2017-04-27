import { GET_CONTACTS } from '../actions';

import { PENDING, SUCCESS, ERROR } from '../actions/AsyncAction';

const initialState = {
  data: [],
  count: 0,
  isPending: false,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS + PENDING:
      return Object.assign({}, state, {
        data: [],
        isPending: true,
        isError: false,
        error: null
      });
    case GET_CONTACTS + SUCCESS:
      return Object.assign({}, state, {
        data: action.data.contacts,
        count: action.data.count,
        isPending: false,
        isError: false
      });
    case GET_CONTACTS + ERROR:
      return Object.assign({}, state, {
        data: [],
        count: 0,
        isPending: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};

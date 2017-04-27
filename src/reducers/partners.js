import { GET_PARTNERS } from '../actions';

import { PENDING, SUCCESS, ERROR } from '../actions/AsyncAction';

const initialState = {
  data: [],
  isPending: false,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNERS + PENDING:
      return Object.assign({}, state, {
        data: [],
        isPending: true,
        isError: false,
        error: null
      });
    case GET_PARTNERS + SUCCESS:
      return Object.assign({}, state, {
        data: action.data.partners,
        isPending: false,
        isError: false
      });
    case GET_PARTNERS + ERROR:
      return Object.assign({}, state, {
        data: [],
        isPending: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};

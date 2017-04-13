import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions';

import { PENDING, SUCCESS, ERROR } from '../actions/AsyncAction';

const initialState = {
  contact: {},
  isPending: false,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT + PENDING:
    case EDIT_CONTACT + PENDING:
    case DELETE_CONTACT + PENDING:
      return Object.assign({}, state, {
        isPending: true,
        isError: false,
        error: null
      });
    case ADD_CONTACT + SUCCESS:
    case EDIT_CONTACT + SUCCESS:
    case DELETE_CONTACT + SUCCESS:
      return Object.assign({}, state, {
        contact: action.data.contact,
        isPending: false,
        isError: false
      });
    case ADD_CONTACT + ERROR:
    case EDIT_CONTACT + ERROR:
    case DELETE_CONTACT + ERROR:
      return Object.assign({}, state, {
        contact: {},
        isPending: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};

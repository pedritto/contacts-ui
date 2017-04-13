
import { SHOW_CONTACT_FORM, HIDE_CONTACT_FORM } from '../actions';

const defaultState = {
  isActive: false,
  contact: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CONTACT_FORM:
      return {
        isActive: true,
        contact: action.contact
      };
    case HIDE_CONTACT_FORM:
      return defaultState;
    default:
      return state;
  }
};

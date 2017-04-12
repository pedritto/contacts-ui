
import { SHOW_CONTACT_FORM } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case SHOW_CONTACT_FORM:
      return action.contact;
    default:
      return state;
  }
};

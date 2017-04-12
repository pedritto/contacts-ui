import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT,
  REQUEST_CONTACTS, RECEIVE_CONTACTS
} from '../actions';


export default (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        action.contact
      ];
    case UPDATE_CONTACT:
      return state.map((contact) => {
        if (contact.id === action.contact.id) {
          return action.contact;
        }
        return contact;
      });
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.contact.id);
    case REQUEST_CONTACTS:
      return state;
    case RECEIVE_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';

import contacts from './contacts';
import inEdit from './inEdit';

export default combineReducers({ contacts, inEdit });

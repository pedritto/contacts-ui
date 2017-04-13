import { combineReducers } from 'redux';

import contacts from './contacts';
import form from './form';

export default combineReducers({ contacts, form });

import { combineReducers } from 'redux';

import contact from './contact';
import contacts from './contacts';
import partners from './partners';
import form from './form';

export default combineReducers({ contact, contacts, partners, form });

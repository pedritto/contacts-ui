import { combineReducers } from 'redux';

import contact from './contact';
import contactList from './contactList';
import partnerList from './partnerList';
import form from './form';

export default combineReducers({ contact, contactList, partnerList, form });

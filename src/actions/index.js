import ContactService from '../services/contact.service';
import PartnerService from '../services/partner.service';

import { exec } from './AsyncAction';

export const GET_CONTACTS = 'GET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const GET_PARTNERS = 'LIST_PARTNERS';

export const SHOW_CONTACT_FORM = 'SHOW_CONTACT_FORM';
export const HIDE_CONTACT_FORM = 'HIDE_CONTACT_FORM';

export const loadContacts = () => {
  return exec(ContactService.getAll, GET_CONTACTS);
};

export const saveContact = (contact) => {
  return exec(() => ContactService.save(contact), ADD_CONTACT);
};

export const updateContact = (contact) => {
  return exec(() => ContactService.update(contact), EDIT_CONTACT);
};

export const removeContact = (contact) => {
  return exec(() => ContactService.delete(contact), DELETE_CONTACT);
};

export const loadPartners = () => {
  return exec(PartnerService.getAll, GET_PARTNERS);
};

export const showContactForm = (contact) => {
  return {
    type: SHOW_CONTACT_FORM,
    contact
  };
};

export const hideContactForm = () => {
  return {
    type: HIDE_CONTACT_FORM
  };
};

import {Injectable} from 'angular2/core';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';


// this is going to be injected to the providers:[] in the component
@Injectable()
export class ContactsService {

  constructor() {
  }
  
  getContacts():Array<Contact> {
    return CONTACT_DATA;
  }

}

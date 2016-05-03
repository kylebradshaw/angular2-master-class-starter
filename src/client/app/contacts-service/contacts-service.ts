import {Injectable} from 'angular2/core';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';


// this is going to be injected to the providers:[] in the component
@Injectable()
export class ContactsService {

  constructor() {
  }
  
  public contacts:Array<Contact> = CONTACT_DATA;
  
  getContacts():Array<Contact> {
    return CONTACT_DATA;
  }

  getContact(id:any):Contact { //can be number or string so best not be too anal about it
    return this.contacts.filter(contact => contact.id == id)[0];
  }

  
}

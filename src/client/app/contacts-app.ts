import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {ContactsService} from './contacts-service/contacts-service';

@Component ({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [ContactHeaderComponent, CORE_DIRECTIVES],
  providers: [ContactsService],
  template: `
    <contact-header-component></contact-header-component>
    <ul class="collection">
      <li *ngFor="#contact of contacts; #i = index" class="collection-item avatar">
        {{i}}
        <img [src]="contact.image" alt="" class="circle">
        <span class="title">{{contact.name}}</span>
      </li>
    </ul>
  `
})

export class ContactsApp {

  contacts:Contact[];
  
  constructor(contactsService:ContactsService) {
    this.contacts = contactsService.getContacts();
  }
  //contact property of type Contact with data {}
  // public contacts:Contact[] = CONTACT_DATA;
  // public contacts:Array<Contact> = CONTACT_DATA;

  public contact:Contact = {
    id: 1,
    name: 'Pascal Precht',
    email: 'pascal@thoughtram.io',
    phone: '+49 000 222',
    birthday: '1991-03-31',
    website: 'thoughtram.io',
    image: '/assets/images/1.jpg',
    address: {
      street: 'thoughtram road 1',
      zip: '65222',
      city: 'Hanover',
      country: 'Germany'
    }
  };
  
}

      // <li class="collection-item avatar">
      //   <img [src]="contact.image" alt="" class="circle">
      //   <span class="title">{{contact.name}}</span>
      // </li>
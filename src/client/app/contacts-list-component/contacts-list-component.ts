import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';
import {ContactHeaderComponent} from '../contact-header-component/contact-header-component';
import {ContactsService} from '../contacts-service/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
// import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component ({
  selector: 'contacts-list-component',
  styleUrls: ['app/contacts-list-component/contacts-list-component.css'],
  directives: [ContactHeaderComponent, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  // providers: [ContactsService, ROUTER_PROVIDERS], //for @Injectables //don't double it
  template: `
    <ul class="collection">
      <li *ngFor="#contact of contacts; #i = index" class="collection-item avatar">
      <a [routerLink]="['/ContactDetail', {id: contact.id}]">
        <img [src]="contact.image" alt="" class="circle">
        <span class="title">{{contact.name}}</span>
      </a>
      </li>
    </ul>
  `
})

// @RouteConfig ([
//   {
//     path: '/ContactDetail',
//     component: ContactsListComponent,
//     name: 'ContactList'
//   }
// ])

export class ContactsListComponent {

  contacts:Array<Contact> = [];
  
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
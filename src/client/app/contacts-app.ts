import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
// import {Contact} from './models/contact';
// import {CONTACT_DATA} from './data/contact-data';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';
import {ContactDetailComponent} from './contact-detail-component/contact-detail-component';
import {ContactsService} from './contacts-service/contacts-service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {RouteConfig} from 'angular2/router';

@Component ({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, ContactHeaderComponent],
  providers: [ROUTER_PROVIDERS, ContactsService],
  template: `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>` //make sure you register the ROUTER_DIRECTIVES so you can use router-outlet
  // directives: [ContactHeaderComponent, CORE_DIRECTIVES],
  // providers: [ContactsService, ROUTER_PROVIDERS], //for @Injectables
  // template: `
  //   <contact-header-component></contact-header-component>
  //   <ul class="collection">
  //     <li *ngFor="#contact of contacts; #i = index" class="collection-item avatar">
  //       {{i}}
  //       <img [src]="contact.image" alt="" class="circle">
  //       <span class="title">{{contact.name}}</span>
  //     </li>
  //   </ul>
  // `
})

@RouteConfig ([
  {
    path: '/',
    component: ContactsListComponent,
    name: 'ContactsList'
  },
  {
    path: '/contact/:id',
    component: ContactDetailComponent,
    name: 'ContactDetail'
  }
])

export class ContactsApp {

  // contacts:Contact[];
  
  // constructor(contactsService:ContactsService) {
  //   this.contacts = contactsService.getContacts();
  // }
  // //contact property of type Contact with data {}
  // // public contacts:Contact[] = CONTACT_DATA;
  // // public contacts:Array<Contact> = CONTACT_DATA;

  // public contact:Contact = {
  //   id: 1,
  //   name: 'Pascal Precht',
  //   email: 'pascal@thoughtram.io',
  //   phone: '+49 000 222',
  //   birthday: '1991-03-31',
  //   website: 'thoughtram.io',
  //   image: '/assets/images/1.jpg',
  //   address: {
  //     street: 'thoughtram road 1',
  //     zip: '65222',
  //     city: 'Hanover',
  //     country: 'Germany'
  //   }
  // };
  
}

      // <li class="collection-item avatar">
      //   <img [src]="contact.image" alt="" class="circle">
      //   <span class="title">{{contact.name}}</span>
      // </li>
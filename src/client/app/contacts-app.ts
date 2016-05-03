import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';

@Component ({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [ContactHeaderComponent],
  template: `
    <contact-header-component></contact-header-component>
    <h1>Hello World</h1>
  `
})

export class ContactsApp {
  
}
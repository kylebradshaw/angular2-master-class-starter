import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ContactsService} from '../contacts-service/contacts-service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app/contact-detail-component/contact-detail-component.html',
  styleUrls: ['app/contact-detail-component/contact-detail-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  pipes: []
})

export class ContactDetailComponent implements OnInit {

  contact:any;
  
  constructor(private routeParams:RouteParams, private contactsService:ContactsService) {
    // this.id = routeParams.get('id');
  }

  ngOnInit() {
    this.contact = this.contactsService.getContact(this.routeParams.get('id'));
  }
  

}

import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    new Contact('facebook', '/tazart.tn' ,'https://www.facebook.com/tazart.tn/'),
    new Contact('instagram', 'tazart.lesfruitsdudesert' ,'https://www.instagram.com/tazart.lesfruitsdudesert/?hl=en'),
    new Contact('email', 'contact@tazart.tn' ,'#'),
    new Contact('phone', '+216 27 968 339' ,'#')
  ];

  getContacts() {
    return (this.contacts);
  }


  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /*contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    console.log("contacts fetched");
    console.log(this.contacts);
  }*/

  constructor() {}

  ngOnInit() {}

}

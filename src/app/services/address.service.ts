import { Address } from './../interfaces/address.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  // hard-coded array of contacts
  addressArray: Address[] = [
    { Id: 1, FirstName: 'John', LastName: 'Johnson', Phone: '111-111-1111', Address: '111 Main Street, Minneapolis, 55001' },
    { Id: 2, FirstName: 'Jack', LastName: 'Jackson', Phone: '222-222-2222', Address: '222 Main Street, Minneapolis, 55001' },
    { Id: 3, FirstName: 'Mary', LastName: 'Johnson', Phone: '333-333-3333', Address: '333 Main Street, Minneapolis, 55001' },
  ]

  constructor() {
  }

  getContacts() {
    return this.addressArray;
  }

  deleteContact(id: number) {
    const index = this.addressArray.findIndex(contact => contact.Id == id);
    this.addressArray.splice(index, 1);
    return this.addressArray;
  }

  updateContact(contact: Address) {
    const index = this.addressArray.findIndex(c => c.Id == contact.Id);
    this.addressArray[index].FirstName = contact.FirstName;
    this.addressArray[index].LastName = contact.LastName;
    this.addressArray[index].Phone = contact.Phone;
    this.addressArray[index].Address = contact.Address;
  }

  createContact(contact: Address) {

    // find highest id
    var highestId = 0;
    this.addressArray.forEach(contactObject => {
      if (contactObject.Id > highestId) {
        highestId = contactObject.Id;
      }
    });

    // add new contact object to array
    this.addressArray.push({
      Id: highestId + 1,
      FirstName: contact.FirstName,
      LastName: contact.LastName,
      Phone: contact.Phone,
      Address: contact.Address
    });

  }
}



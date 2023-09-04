import { Component } from '@angular/core';
import { Address } from '../interfaces/address.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent {
  newContact: Address = { Id: 0, FirstName: '', LastName: '', Phone: '', Address: '' };

  newContactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private addressService: AddressService) {
  }

  createNewContact() {

    console.log(this.newContactForm.value);
    this.newContact.Id = 0;

    this.newContact.FirstName = this.newContactForm.controls['firstName'].value as string;
    this.newContact.LastName = this.newContactForm.controls['lastName'].value ? this.newContactForm.controls['lastName'].value : '';
    this.newContact.Phone = this.newContactForm.controls['phone'].value as string;
    this.newContact.Address = this.newContactForm.controls['address'].value as string;


    console.log(this.newContact);

    this.addressService.createContact(this.newContact);

    this.router.navigate(['/contacts']);
  }
}

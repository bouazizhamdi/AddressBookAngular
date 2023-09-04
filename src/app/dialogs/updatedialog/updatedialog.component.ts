import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {
  contact!: Address;

  updateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Address, private addressService: AddressService) {
    this.contact = data;
  }

  ngOnInit(): void {
    this.updateForm.controls['firstName'].setValue(this.contact.FirstName);
    this.updateForm.controls['lastName'].setValue(this.contact.LastName);
    this.updateForm.controls['phone'].setValue(this.contact.Phone);
    this.updateForm.controls['address'].setValue(this.contact.Address);
  }



  updateContact() {
    this.contact.FirstName = this.updateForm.controls['firstName'].value as string;
    this.contact.LastName = this.updateForm.controls['lastName'].value as string;
    this.contact.Phone = this.updateForm.controls['phone'].value as string;
    this.contact.Address = this.updateForm.controls['address'].value as string;
    this.addressService.updateContact(this.contact);
  }

}

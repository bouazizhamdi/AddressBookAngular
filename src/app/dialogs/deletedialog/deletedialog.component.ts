import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent {
  contact!: Address;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Address, private addressService: AddressService) {
    this.contact = data;
  }

  deleteContact() {
    this.addressService.deleteContact(this.contact.Id);
  }

}

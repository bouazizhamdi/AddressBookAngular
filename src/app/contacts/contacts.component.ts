import { MatDialog } from '@angular/material/dialog';
import { AddressService } from './../services/address.service';
import { Component, OnInit } from '@angular/core';
import { DeletedialogComponent } from '../dialogs/deletedialog/deletedialog.component';
import { Address } from '../interfaces/address.interface';
import { MatTableDataSource } from '@angular/material/table';
import { UpdatedialogComponent } from '../dialogs/updatedialog/updatedialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  clickedRows = new Set<Address>();

  myDataArray: Address[] = [];

  dataSource = new MatTableDataSource<Address>();

  columnsToDisplay = ['FirstName', 'LastName', 'Phone', 'Address', 'Delete', 'Update'];

  constructor(public dialog: MatDialog, private addressService: AddressService) { }

  ngOnInit() {
    this.myDataArray = this.addressService.getContacts();
    this.dataSource = new MatTableDataSource<Address>(this.myDataArray);
  }

  deleteContact(contactData: any) {

    let deleteDialogRef = this.dialog.open(DeletedialogComponent, {
      height: '320px',
      width: '400px',
      data: contactData
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      //this.myDataArray = this.addressService.getContacts();
      this.dataSource.connect().next(this.myDataArray);
      console.log("Delete dialog closed");
    });
  }

  updateContact(contactData: any) {

    let updateDialogRef = this.dialog.open(UpdatedialogComponent, {
      height: '520px',
      width: '400px',
      data: contactData
    });

    updateDialogRef.afterClosed().subscribe(result => {
      this.dataSource.connect().next(this.myDataArray);
      console.log("Update dialog closed");
    });
  }

  clickedRow(myRowData: any) {
    console.log(myRowData);
  }

}

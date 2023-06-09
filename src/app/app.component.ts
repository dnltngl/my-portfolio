import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
    isSidenavOpen = false;
  constructor(private router: Router,public dialog: MatDialog){}
  goToRoute(route: string, scrollY: number) {
    this.router.navigate([`${route}`]);
    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
    
  }
  openDialog() {
  this.dialog.open(ContactsComponent);
  }
   toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;

  }
  openForm() {
    const link = 'https://formsubmit.co/el/welunu';
    window.open(link);
  }
}


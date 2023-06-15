import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import * as AOS from 'aos';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-portfolio';
  isSidenavOpen = false;
  constructor(private router: Router, public dialog: MatDialog) {}
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
  ngOnInit() {
    AOS.init({});
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}


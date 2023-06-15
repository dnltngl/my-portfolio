import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, AfterViewInit{
  ngOnInit() {
    AOS.init({});
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}

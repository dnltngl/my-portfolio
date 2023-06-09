
import * as AOS from 'aos';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    AOS.init({once:true});
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}


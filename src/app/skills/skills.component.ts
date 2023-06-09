import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit{
  ngOnInit() {
    AOS.init({});
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}

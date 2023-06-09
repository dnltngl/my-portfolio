import * as AOS from 'aos';
import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements OnInit, AfterViewInit{
 ngOnInit() {
    AOS.init({once:true});
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}


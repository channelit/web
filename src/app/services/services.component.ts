import {Component, OnInit} from '@angular/core';
import {ServicesSearch} from "../content/services.search"

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  searchServices = ServicesSearch;
  constructor() { }

  ngOnInit() {
  }

}

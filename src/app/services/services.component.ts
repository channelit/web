import {Component, OnInit} from '@angular/core';
import { Routes, RouterModule, RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(routerState: RouterState) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Clients} from '../content/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  clients = Clients;

}

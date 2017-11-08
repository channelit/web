import { Component, OnInit } from '@angular/core';
import {Clients} from '../content/clients';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -64);
      }
    });
  }

  ngOnInit() {

  }

  clients = Clients;

}

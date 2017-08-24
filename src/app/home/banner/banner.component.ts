import { Component, OnInit } from '@angular/core';

import { MenuItems} from "../../content/menu";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  menuItems = MenuItems;

  constructor() { }

  ngOnInit() {
  }

}

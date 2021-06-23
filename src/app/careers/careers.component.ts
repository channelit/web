import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Careers} from "../content/careers";

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + f);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -64);
      }
    });
  }

  ngOnInit(): void {
  }
  careers = Careers;
}

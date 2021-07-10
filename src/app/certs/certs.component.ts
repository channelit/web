import {Component, OnInit} from '@angular/core';
import {Certs} from '../content/certs';
import {ActivatedRoute, Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -64);
      }
    });
  }


  ngOnInit(): void {
  }

  certs = Certs;
}

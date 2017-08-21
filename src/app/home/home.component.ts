import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    // router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .subscribe((event: NavigationEnd) => {
    //     window.scroll(0, 0);
    //   });
  }

  ngOnInit() {
  }

}

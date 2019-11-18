import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {trigger, state, transition, animate, keyframes, style} from '@angular/animations';

import {MenuItems} from "./content/menu";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('toolbarAnimation', [
      state('full', style({
        background: 'transparent'
      })),
      state('small', style({
        background: '#347DCE'
      })),
      transition('full <=> small', animate('1ms')),
    ])
  ]
})
export class AppComponent implements OnInit, OnChanges {
  menuItems = MenuItems;
  state: string = 'full';
  ctr: number = 0;
  dir: string = "down";
  posLast: number = 0;

  @HostListener('window:scroll')
  onScroll(e: Event) {
    this.animateToolbar();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData['animation'];
  }
  animateToolbar() {
    this.dir = (this.posLast > window.pageYOffset ? 'up': 'down');
    this.posLast = window.pageYOffset;

    if (this.dir === 'down' && window.pageYOffset >= 20) {
      if (this.state === 'full') {
        this.state = 'small';
      }
    }
    if (this.dir === 'up' && window.pageYOffset==0) {
      if (this.state === 'small') {
        this.state = 'full';
      }
    }
  }

}

import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {trigger, state, transition, animate, keyframes, style} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('toolbarAnimation', [
      state('full', style({
        height: '400px',
        position: 'fixed'
      })),
      state('small', style({
        height:  '60px',
        background: '#347DCE',
        position: 'fixed'
      })),
      transition('full <=> small', animate('1ms')),
    ]),
    trigger('logoAnimation', [
      state('full', style({
        height: '1000px',
      })),
      state('small', style({
        height: window.pageYOffset + 'px',
        background: '#347DCE',
        position: 'fixed'
      })),
      transition('full <=> small', animate('0.5s')),
    ])
  ]
})
export class AppComponent implements OnInit, OnChanges {

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
  animateToolbar() {
    console.log();
    this.dir = (this.posLast > window.pageYOffset ? 'up': 'down');
    this.posLast = window.pageYOffset;

    if (this.dir === 'down' && window.pageYOffset >= 20) {
      if (this.state === 'full') {
        this.state = 'small';
      }
    }
    if (this.dir === 'up' && window.pageYOffset==0) {
      if (this.state === 'small') {
        this.state = 'full'
      }
    }
  }

}

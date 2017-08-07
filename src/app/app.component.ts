import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {trigger, state, transition, animate, keyframes, style} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('toolbarAnimation', [
      state('full', style({
        height: '1000px',
      })),
      state('small', style({
        height: '60px',
        background: '#347DCE',
        position: 'fixed'
      })),
      transition('full => small', animate('300ms')),
    ]),
    trigger('logoAnimation', [
      state('full', style({
        height: '1000px',
      })),
      state('small', style({
        height: '60px',
        background: '#347DCE',
        position: 'fixed'
      })),
      transition('full => small', animate('300ms')),
    ])
  ]
})
export class AppComponent implements OnInit, OnChanges {

  state: string = 'full';
  ctr: number = 0;

  @HostListener('window:scroll')
  onScroll(e: Event) {
    this.animateToolbar();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  animateToolbar() {
    console.log(window.pageYOffset);
    if (window.pageYOffset === 0) {
      this.ctr ++;
      if (this.ctr > 2 ) {
        this.state = 'full'
        this.ctr = 0;
      }
    } else {
      if (this.state === 'full') {
        this.state = 'small'
      }
    }
  }


}

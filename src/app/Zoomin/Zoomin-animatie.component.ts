import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-Zoomin',
    templateUrl: './Zoomin-animatie.component.html',
    styleUrls: ['./Zoomin-animatie.component.css'],
    animations: [
      trigger('zoomIn', [
        state('normal', style({
          transform: 'scale(1)'
        })),
        state('zoomed', style({
          transform: 'scale(1.1)'
        })),
        transition('normal => zoomed', animate('300ms ease-in')),
        transition('zoomed => normal', animate('300ms ease-out'))
      ])
    ]
  })

  export class ZoominComponent {
    animationState: string = 'normal';
  
    zoom(state: string) {
      this.animationState = state;
    }
  }
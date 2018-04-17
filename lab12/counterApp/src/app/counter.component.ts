import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  <button (click)="decrease()">-</button>
  <button (click)="increase()">+</button>
  </p>
  <p>
  Counter value: {{count}}
  </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

}

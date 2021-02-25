import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app11-slider11',
  template: `
    <p>
      slider11 works!
    </p>

    <mat-slider min="1" max="100" step="1" value="1"></mat-slider>
  `,
  styles: [
  ]
})
export class Slider11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

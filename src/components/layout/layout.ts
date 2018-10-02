import { Component } from '@angular/core';

/**
 * Generated class for the LayoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'layout',
  templateUrl: 'layout.html'
})
export class LayoutComponent {

  text: string;

  constructor() {
    console.log('Hello LayoutComponent Component');
    this.text = 'Hello World';
  }

}

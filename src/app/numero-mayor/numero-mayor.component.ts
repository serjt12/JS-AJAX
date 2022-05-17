import { Component } from '@angular/core';

@Component({
  selector: 'app-numero-mayor',
  templateUrl: './numero-mayor.component.html',
  styleUrls: ['./numero-mayor.component.css']
})
export class NumeroMayorComponent {
  firstNumber = 0;
  secondNumber = 0;
  greatest = 0;

  checkGreatest() {
    if (+this.firstNumber > +this.secondNumber) {
      this.greatest = this.firstNumber;
    } else {
      this.greatest = this.secondNumber;
    }
  }

}

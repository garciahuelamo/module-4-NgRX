import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddFiveComponent } from '../add-five/add-five.component';        
import { SubtractFiveComponent } from '../subtract-five/subtract-five.component'; 
import { ResetCounterComponent } from '../reset-counter/reset-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, AddFiveComponent, SubtractFiveComponent, ResetCounterComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  incrementFunc() {
    this.counter++;
  }

  decrementFunc() {
    this.counter--;
    if (this.counter < 0){
      console.error("Negative numbers doesn't work.")
      this.startFunc();
    }
  }

  startFunc(){
    this.counter = 0;
  }

  addFive() {
    this.counter += 5;
  }

  subtractFive() {
    this.counter -= 5;
  }

  reset() {
    this.counter = 0;
  }

}

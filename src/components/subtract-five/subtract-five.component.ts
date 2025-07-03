import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subtract-five',
  standalone: true,
  template: `
    <button (click)="onSubtractFive()">Restar 5</button>
  `
})
export class SubtractFiveComponent {
  @Output() subtractFive = new EventEmitter<void>();

  onSubtractFive() {
    this.subtractFive.emit();
  }
}
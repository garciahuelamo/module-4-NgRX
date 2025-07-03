import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-five',
  standalone: true,
  template: `
    <button (click)="onAddFive()">Sumar 5</button>
  `
})
export class AddFiveComponent {
  @Output() addFive = new EventEmitter<void>();

  onAddFive() {
    this.addFive.emit();
  }
}
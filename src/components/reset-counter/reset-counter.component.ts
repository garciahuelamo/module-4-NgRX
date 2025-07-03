import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reset-counter',
  standalone: true,
  template: `
    <button (click)="onReset()">Reiniciar contador</button>
  `
})
export class ResetCounterComponent {
  @Output() reset = new EventEmitter<void>();

  onReset() {
    this.reset.emit();
  }
}

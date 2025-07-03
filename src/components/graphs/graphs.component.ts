import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  template: `
    <div style="display: flex; gap: 2rem;">
      <ngx-charts-line-chart
        [results]="lineData$ | async"
        [view]="[600, 400]"
        [scheme]="'cool'"
        [legend]="true"
        [xAxis]="true"
        [yAxis]="true"
        [autoScale]="true">
      </ngx-charts-line-chart>

      <ngx-charts-bar-vertical
        [results]="barData$ | async"
        [view]="[600, 400]"
        [scheme]="'vivid'"
        [legend]="true"
        [xAxis]="true"
        [yAxis]="true">
      </ngx-charts-bar-vertical>
    </div>
  `,
  styles: []
})
export class GraphsComponent {
  lineData$: Observable<any>;
  barData$: Observable<any>;

  constructor() {
    this.lineData$ = of([
      {
        name: 'Ventas 2025',
        series: [
          { name: 'Enero', value: 50 },
          { name: 'Febrero', value: 80 },
          { name: 'Marzo', value: 45 },
          { name: 'Abril', value: 70 },
          { name: 'Mayo', value: 90 }
        ]
      }
    ]);

    this.barData$ = of([
      { name: 'Producto A', value: 120 },
      { name: 'Producto B', value: 150 },
      { name: 'Producto C', value: 80 },
      { name: 'Producto D', value: 200 }
    ]);
  }
}


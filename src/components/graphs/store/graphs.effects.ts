import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess } from './graphs.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class GraphsEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      map(() => {
        const lineData = [
          {
            name: 'Ventas',
            series: [
              { name: 'Ene', value: 30 },
              { name: 'Feb', value: 50 },
              { name: 'Mar', value: 40 }
            ]
          }
        ];

        const barData = [
          { name: 'Producto A', value: 70 },
          { name: 'Producto B', value: 40 },
          { name: 'Producto C', value: 60 }
        ];

        return loadDataSuccess({ lineData, barData });
      })
    )
  );

  constructor(private actions$: Actions) {}
}

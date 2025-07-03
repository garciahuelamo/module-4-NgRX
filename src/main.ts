import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from './app/app.component';
import { lineChartReducer, barChartReducer } from './components/graphs/store/graphs.reducer';
import { GraphsEffects } from './components/graphs/store/graphs.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      lineChart: lineChartReducer,
      barChart: barChartReducer
    }),
    provideEffects([GraphsEffects])
  ]
});

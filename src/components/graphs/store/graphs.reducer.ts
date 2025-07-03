import { createReducer, on } from '@ngrx/store';
import * as GraphsActions from './graphs.actions';

export const initialLineChartState: any[] = [];
export const initialBarChartState: any[] = [];

export const lineChartReducer = createReducer(
  initialLineChartState,
  on(GraphsActions.loadDataSuccess, (state, { lineData }) => lineData)
);

export const barChartReducer = createReducer(
  initialBarChartState,
  on(GraphsActions.loadDataSuccess, (state, { barData }) => barData)
);

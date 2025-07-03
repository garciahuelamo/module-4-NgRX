import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Graphs] Load Data');
export const loadDataSuccess = createAction('[Graphs] Load Data Success', props<{ lineData: any, barData: any }>());

import { createAction, props } from '@ngrx/store';
import Person from './person-model';

export const BeginCreatePersonAction = createAction(
  '[Person] - Begin Create Person',
  props<{ payload: Person }>()
);

export const SuccessCreatePersonAction = createAction(
  '[Person] - Success Create Person',
  props<{ payload: Person }>()
);

export const BeginGetPersonAction = createAction(
  '[Person] - Begin Get Person' 
);

export const SuccessGetPersonAction = createAction(
  '[Person] - Success Get Person' 
);

export const ErrorPersonAction = createAction('[Person] - Error', props<Error>());

import { Action, createReducer, on } from '@ngrx/store';
import * as PersonActions from './person-actions';
import PersonState, { initializeState } from './person-state';

const initialState = initializeState();

const reducer = createReducer(
    initialState,

    on(PersonActions.SuccessCreatePersonAction, (state: PersonState, { payload }) => {
        return { ...state, Persons: [...state.Persons, payload], PersonError: null };
    }),
    on(PersonActions.SuccessGetPersonAction, (state: PersonState) => {
        return { ...state, state, PersonError: null };
    }),

    on(PersonActions.ErrorPersonAction, (state: PersonState, error: Error) => {
        // remove below line and use different telemetry logging
        console.error(error);
        return { ...state, PersonError: error };
    })
);

export function PersonReducer(
    state: PersonState | undefined,
    action: Action
): PersonState {
    return reducer(state, action);
}

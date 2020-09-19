import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PersonActions from './person-actions';
import { PersonHttpService } from './person-httpservice';
import Person from './person-model';

@Injectable()
export class PersonEffects {
    constructor(private personService: PersonHttpService, private action$: Actions) { }

    CreatePersons$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(PersonActions.BeginCreatePersonAction),
            mergeMap(action =>
                this.personService.createPersons(action.payload).pipe(
                    map((data: Person) => {
                        return PersonActions.SuccessCreatePersonAction({ payload: data });
                    }),
                    catchError((error: Error) => {
                        return of(PersonActions.ErrorPersonAction(error));
                    })
                )
            )
        )
    );

    GetPersons$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(PersonActions.BeginGetPersonAction),
            mergeMap(action =>
                this.personService.getPersons().pipe(
                    map((data: Person) => {
                        return PersonActions.SuccessGetPersonAction();
                    }),
                    catchError((error: Error) => {
                        return of(PersonActions.ErrorPersonAction(error));
                    })
                )
            )
        )
    );
}

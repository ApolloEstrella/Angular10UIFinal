import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import Person from './person-model';
import { select, Store } from '@ngrx/store';
import PersonState from '../main-app/person-state'
import { map } from 'rxjs/operators';
import * as PersonActions from '../main-app/person-actions'

@Injectable({
    providedIn: 'root'
})
export class PersonHttpService {

    person$: Observable<Person[]>;
     
    constructor(private store: Store<{ persons: Person[] }>) {
        //this.person$ = store.pipe(select('persons'));
    }
    
    createPersons(payload): Observable<Person> {
        const data = { "Email": payload}
        const dataSource = of(data);
        return dataSource     
    }

    getPersons(): Observable<Person> {
        const data = { "Email": "" }
        const dataSource = of(data);
        return dataSource 
    }
}

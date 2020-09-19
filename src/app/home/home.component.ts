import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as PersonActions from '../main-app/person-actions'
import Person from '../main-app/person-model';
import PersonState from '../main-app/person-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person$: Observable<PersonState>;
  PersonSubscription: Subscription;
  PersonList: Person[] = [];
  personError: Error = null;
  loginUser: Person;

  constructor(private store: Store<{ persons: PersonState }>) {
    this.person$ = store.pipe(select('persons'));
  }

  ngOnInit() {
    this.PersonSubscription = this.person$
      .pipe(
        map(x => {
          this.PersonList = x.Persons;
          this.personError = x.PersonError;
        })
      )
      .subscribe();

    if (this.PersonList.length > 0) {
      this.store.dispatch(PersonActions.BeginGetPersonAction());
      this.loginUser = this.PersonList[0];
    }
  }



}

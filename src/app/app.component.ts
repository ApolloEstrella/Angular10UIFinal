import { Component, OnInit, OnChanges } from '@angular/core';
import { On, select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Person from './main-app/person-model';
import PersonState from './main-app/person-state';
import * as PersonActions from '../app/main-app/person-actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'HOME';
  uName: string = ''

  person$: Observable<PersonState>;
  PersonSubscription: Subscription;
  PersonList: Person[] = [];
  personError: Error = null;
  loginUser: Person;

  constructor(private store: Store<{ persons: PersonState }>) {
    this.store.dispatch(PersonActions.BeginGetPersonAction());
    this.person$ = store.pipe(select('persons'));
    
  }
 

  loadUserName() {
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
      this.uName = this.PersonList[0].Email;
    }
  } 

  ngOnInit() {
    this.store.dispatch(PersonActions.BeginGetPersonAction());
    this.person$ = this.store.pipe(select('persons'));
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
      this.uName = this.PersonList[0].Email;
    }
  }
}

 
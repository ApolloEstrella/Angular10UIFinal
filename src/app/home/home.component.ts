import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as PersonActions from '../main-app/person-actions'
import Person from '../main-app/person-model';
import PersonState from '../main-app/person-state';
import { LocalService } from '../main-app/local.service';
import { Router, RouterEvent, NavigationEnd} from '@angular/router';
//import 'rxjs/add/operator/pairwise';
//import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  userName: string;

  /*person$: Observable<PersonState>;
  PersonSubscription: Subscription;
  PersonList: Person[] = [];
  personError: Error = null;
  loginUser: Person; */

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private storageService: LocalService, private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        if (this.currentUrl === '/logout') {
          storageService.clearToken();
          this.userName = ''
        }
      }
    });   
  }

  /*setLocalStorage() {
    // Set the User data
    this.localService.setJsonValue('user', this.userName);
  }
  getLocalStorage() {
    // Get the user data
    this.userName = this.localService.getJsonValue('user');
  }
  logoutUser() {
    // Clear the localStorage
    this.localService.clearToken();
  }*/

  ngOnInit() {
     //alert(this.storageService.getJsonValue('user'))
     this.userName = this.storageService.getJsonValue('user')
      
  }



}

import { Injectable } from '@angular/core';
import { LocalService } from '../app/main-app/local.service'

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private storageService: LocalService) { }
  gettoken() {
    return !!this.storageService.getJsonValue('user');
  }
}

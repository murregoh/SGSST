import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private authService: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if ( this.authService.isAuthenticated() ) {
      return true;
    } else {
      return false;
    }
  }

}

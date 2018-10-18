import { Component, OnInit, OnDestroy, OnChanges,
          DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit,
          AfterViewChecked } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                        AfterContentChecked, AfterViewInit, AfterViewChecked,
                                        OnDestroy {

  profile: any;
  isAuth: boolean;

  constructor( private auth: AuthService) {
    this.auth.handleAuthentication();
    this.isAuth = this.auth.isAuthenticated();
    console.log('Header - Constructor ' + this.isAuth );
  }

  login() {
    this.auth.login();
    if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

  }

  logout() {
    this.auth.logout();
  }

  ngOnChanges() {
    console.log('Header - ngOnChanges '  + this.isAuth );
  }

  ngOnInit() {
    console.log('Header - ngOnInit '  + this.isAuth );
  }
  ngDoCheck() {
    console.log('Header - ngDoCheck '  + this.isAuth );
  }
  ngAfterContentInit() {
    console.log('Header - ngAfterContentInit '  + this.isAuth );
  }
  ngAfterContentChecked() {
    console.log('Header - ngAfterContentChecked '  + this.isAuth );
  }
  ngAfterViewInit() {
    console.log('Header - ngAfterViewInit ' + this.isAuth );
  }
  ngAfterViewChecked() {
    console.log('Header - ngAfterViewChecked ' + this.isAuth );
  }
  ngOnDestroy() {
    console.log('Header - ngOnDestroy ' + this.isAuth );
  }

}

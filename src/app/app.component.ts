import { Component, OnInit, OnDestroy, OnChanges,
          DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit,
          AfterViewChecked } from '@angular/core';
import { AuthService } from '../app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                      AfterContentChecked, AfterViewInit, AfterViewChecked,
                                      OnDestroy {

  isAuth: boolean;

  constructor( private auth: AuthService) {
    this.auth.handleAuthentication();
    this.isAuth = this.auth.isAuthenticated();
    console.log('APP - Constructor');
  }

  ngOnChanges() {
    console.log('APP - ngOnChanges');
  }
  ngOnInit() {
    console.log('APP - ngOnInit');
  }
  ngDoCheck() {
    console.log('APP - ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('APP - ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('APP - ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('APP - ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('APP - ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('APP - ngOnDestroy');
  }
}

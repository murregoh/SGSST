import { Component, OnInit, OnDestroy, OnChanges,
          DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit,
          AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                        AfterContentChecked, AfterViewInit, AfterViewChecked,
                                        OnDestroy {

  isAuth: boolean;

  constructor( private _activeRoute: ActivatedRoute,
              private auth: AuthService ) {
    this.isAuth = this.auth.isAuthenticated();
    console.log('Navbar - Constructor');
  }
  ngOnChanges() {
    console.log('Navbar - ngOnChanges');
  }
  ngOnInit() {
    console.log('Navbar - ngOnInit');
  }
  ngDoCheck() {
    console.log('Navbar - ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Navbar - ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Navbar - ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Navbar - ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Navbar - ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Navbar - ngOnDestroy');
  }

}

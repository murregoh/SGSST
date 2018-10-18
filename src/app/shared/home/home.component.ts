import { Component, OnInit, OnChanges, DoCheck,
          AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                      AfterContentChecked, AfterViewInit, AfterViewChecked,
                                      OnDestroy {

  isAuth: boolean;

  constructor( private auth: AuthService) {
    this.isAuth = this.auth.isAuthenticated();
    console.log('Home - Constructor');
  }

  ngOnChanges() {
    console.log('Home - ngOnChanges');
  }
  ngOnInit() {
    console.log('Home - ngOnInit');
  }
  ngDoCheck() {
    console.log('Home - ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Home - ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Home - ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Home - ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Home - ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Home - ngOnDestroy');
  }

}

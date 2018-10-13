import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isAuth: boolean;

  constructor( private _activeRoute: ActivatedRoute ) {
    this._activeRoute.params.subscribe( data => console.log(data) );
  }

  ngOnInit() {
  }

}

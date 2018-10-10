import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbarright',
  templateUrl: './navbarright.component.html',
  styleUrls: ['./navbarright.component.css']
})
export class NavbarrightComponent implements OnInit {

  constructor( private _activeRoute: ActivatedRoute ) {
    this._activeRoute.params.subscribe( data => console.log(data) );
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbarright',
  templateUrl: './navbarright.component.html',
  styleUrls: ['./navbarright.component.css']
})
export class NavbarrightComponent implements OnInit {

  @Input() test: string;

  constructor() {
  }

  ngOnInit() {
  }

}

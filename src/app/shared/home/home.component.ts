import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: any;

  constructor( public _auth: AuthService) {
  }

  ngOnInit() {
    if (this._auth.userProfile) {
      this.profile = this._auth.userProfile;
      console.log( this.profile );
    } else {
      this._auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log( this.profile );
      });
    }
  }

}

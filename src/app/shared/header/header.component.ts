import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: any;

  constructor( public auth: AuthService) {    
  }
  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log( this.profile );
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log( this.profile );
      });
    }
  }
}

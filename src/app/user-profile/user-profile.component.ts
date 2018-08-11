import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor( private myService: AuthService, private myRouter: Router ) { }

  ngOnInit() {
    console.log('user in user prof component', this.user);


    this.myService.isLoggedIn();


    this.myService.currentUser
    .subscribe((theUser) =>  {
      console.log('user in user component', theUser);
      this.user = theUser;
    });

  }

}

import { AmplifyService } from 'aws-amplify-angular';
import { AuthService } from '@portfolio/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.styl']
})
export class SecurityComponent implements OnInit {

  constructor(private auth: AuthService, private amplifyService: AmplifyService) { }

  ngOnInit() { }

  onClickLogout() {
    this.auth.signOut();
  }

  getToken() {
    this.auth.currentSession().then(value => { console.log(value.getAccessToken()); });
  }

}

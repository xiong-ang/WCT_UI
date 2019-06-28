import { Component, OnInit } from '@angular/core';
import {WctWebWrapperService} from '../../Common/wct-web-wrapper.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = null;
  email: string = null;
  password:string = null;

  constructor(private wtcService: WctWebWrapperService) { }

  ngOnInit() {
  }

  login()
  {
    this.wtcService.login({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}

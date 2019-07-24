import { Component, OnInit } from '@angular/core';
import {WctWebWrapperService} from '../../Common/wct-web-wrapper.service'

@Component({
  selector: 'app-registe-page',
  templateUrl: './registe-page.component.html',
  styleUrls: ['./registe-page.component.css']
})
export class RegistePageComponent implements OnInit {

  username: string = null;
  email: string = null;
  password:string = null;

  constructor(private wtcService: WctWebWrapperService) { }

  ngOnInit() {
  }

  register()
  {
    this.wtcService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}

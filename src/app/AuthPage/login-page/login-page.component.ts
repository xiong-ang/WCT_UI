import {Component,  OnInit} from '@angular/core';
import {WctWebWrapperService} from '../../Common/wct-web-wrapper.service'
import {FormGroup,  FormControl,  Validators} from '@angular/forms';
import {beginWith,  userNameVal,  passwordVal,  passwordConfirmVal} from '../Validator/validators'
import {UniqueEmailValidator} from '../Validator/emailValidator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  accpet:boolean=false;
  showLicenseError = false;
  constructor(private wtcService: WctWebWrapperService, private uniqueEmailValidator: UniqueEmailValidator) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'lemail': new FormControl('', [Validators.required]),
      'lpassword': new FormControl('', [Validators.required]),
    });
    this.registerForm = new FormGroup({
      'rname': new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
          beginWith(/^(?!_)/),
          userNameVal(/^[0-9a-zA-Z_]{0,}$/)
        ],
        updateOn: 'blur'
      }),

      'remail': new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ],
        asyncValidators: [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)],
        updateOn: 'blur'
      }, ),
      'rpassword': new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          passwordVal(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        ]
      }),
      'rconfirm': new FormControl('', {
        validators: [
          Validators.required,
        ]
      }),
    }, {
      validators: passwordConfirmVal
    });
  }

  get lemail() {
    return this.loginForm.get('lemail');
  }
  get lpassword() {
    return this.loginForm.get('lpassword');
  }
  get rname() {
    return this.registerForm.get('rname');
  }
  get remail() {
    return this.registerForm.get('remail');
  }
  get rpassword() {
    return this.registerForm.get('rpassword');
  }
  get rconfirm() {
    return this.registerForm.get('rconfirm');
  }

  login() {
    if(this.hasLoginError())
    {
      return;
    }
    this.wtcService.login({
      username: "",
      email: this.lemail.value,
      password: this.lpassword.value
    });
  }

  register() {
    if(this.hasRegisterError())
    {
      return;
    }
    this.wtcService.register({
      username: this.rname.value,
      email: this.remail.value,
      password: this.rpassword.value
    });
  }

  hasLoginError() {
    if(!this.lemail.touched){
      this.lemail.markAsTouched();
      return true;
    }
    if(!this.lpassword.touched){
      this.lpassword.markAllAsTouched();
      return true;
    }
    return false;
  }

  hasRegisterError() {
    if(!this.rname.touched)
    {
      this.rname.markAsTouched();
      return true;
    }
    if(!this.remail.touched){
      this.remail.markAsTouched();
      return true;
    }
    if(!this.rpassword.touched){
      this.rpassword.markAllAsTouched();
      return true;
    }
    if(!this.rconfirm.touched){
      this.rconfirm.markAllAsTouched()
      return true;;
    }
    if(!this.accpet){
      this.showLicenseError = true;
      return true;
    }
    return false;
  
  }

  acceptLicense(){
    this.accpet = !this.accpet;
    this.showLicenseError = false;
  }
}

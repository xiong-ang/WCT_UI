import {
  AbstractControl,
  ValidatorFn,
  NG_VALIDATORS,
  Validator,
  ValidationErrors
} from "@angular/forms";
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

//control是我们要验证的表单控件, 
export function beginWith(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {
    [key: string]: any
  } | null => {
    const isMatch = regExp.test(control.value);
    return isMatch ? null : {
      'beginWith': {
        value: control.value
      }
    };
  };
}

export function userNameVal(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {
    [key: string]: any
  } | null => {
    const isMatch = regExp.test(control.value);
    return isMatch ? null : {
      'userNameVal': {
        value: control.value
      }
    };
  };
}

export function passwordVal(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {
    [key: string]: any
  } | null => {
    const isMatch = regExp.test(control.value);
    return isMatch ? null : {
      'passwordVal': {
        value: control.value
      }
    };
  };
}

export const passwordConfirmVal: ValidatorFn = (control: FormGroup):
  ValidationErrors | null => {
    const password = control.get('rpassword');
    const confirm = control.get('rconfirm');
    if(!password.touched) return null;
    return password && confirm && password.value === confirm.value ? null : {
      'passwordConfirmVal': true
    };
  };

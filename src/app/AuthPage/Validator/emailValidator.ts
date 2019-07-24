import {  Directive,  forwardRef,  Injectable} from '@angular/core';
import {  AsyncValidator,  AbstractControl,  NG_ASYNC_VALIDATORS,  ValidationErrors} from '@angular/forms';
import {  catchError,  map} from 'rxjs/operators';
import {  Observable} from 'rxjs';
import { WctWebWrapperService } from 'src/app/Common/wct-web-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueEmailValidator implements AsyncValidator {
  constructor(private wtcService: WctWebWrapperService) {}

  validate(ctrl: AbstractControl): Promise < ValidationErrors | null > | Observable < ValidationErrors | null > {

      /*return this.wtcService.isEmailExist(ctrl.value).pipe(
        map(isExist =>(isExist?{uniqueEmail: true}:null)),
        catchError(()=>null)
      );*/
      return this.wtcService.isEmailExist(ctrl.value)
        .pipe(
          map(res => {

            console.log("get response" + res);
            // if username is already taken
            if (res) {
              // return error
              return { 'uniqueEmail': true};
            }
            return null;
            
          })

        );
    }
  }
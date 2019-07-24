import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CompareHelperService } from './compare-helper.service'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WctWebWrapperService {

  baseUrl: string = 'http://localhost:60000/api/';
  token: string = null;
  username: string = null;
  email: string = null;
  
  emailArray:any = ['kzhang6@ra'];

  constructor(private http: HttpClient,
    private router: Router,
    private compareHelper: CompareHelperService) { }

  register(user) {
    this.http.post(this.baseUrl + "auth/new",
      {
        "username": user.username,
        "password": user.password,
        "email": user.email
      })
      .subscribe(
        (val: any) => {
          if (!val.result) {
            console.log(val.message);
          } else {
            this.router.navigateByUrl('Login');
          }
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  ALTER_EGOS = ['kzhang6@ra'];

  isEmailExist(email: string): Observable<boolean> {
    const isTaken = this.ALTER_EGOS.includes(email);

    return of(isTaken).pipe(delay(500));
  }

  isEmailExistEx(email: string){
    const headers = new HttpHeaders().set("Authorization", this.token);
    const url = this.baseUrl + "auth/email/" + email;
    return this.http.get(url)
  }

  login(user) {
    this.http.post(this.baseUrl + "auth/verify",
      {
        "username": user.username,
        "password": user.password,
        "email": user.email
      })
      .subscribe(
        (val: any) => {
          if (!val.result) {
            console.log(val.message);
          } else {
            this.token = val.token.token;
            console.log('Success with token: ' + this.token);
            this.router.navigateByUrl('Config');
          }
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  compare(compareInputFormdata) {
    const headers = new HttpHeaders().set("Authorization", this.token);
    this.http.post(this.baseUrl + "compare", compareInputFormdata, { headers })
      .subscribe(
        (val: any) => {

        },
        response => {
          if ('Unauthorized' == response.statusText) {
            this.router.navigateByUrl('Login');
          }

          console.log("POST call in error", response.statusText);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
  getCompareRecords(start, count) {
    if (this.token == null) {
      this.router.navigateByUrl('Login');
      return;
    }

    const headers = new HttpHeaders().set("Authorization", this.token);
    this.http.get(this.baseUrl + `compare/history/${start}/${count}`, { headers })
      .subscribe(
        (val: any) => {
          this.updateCompareRecords(val);
          console.log(this.compareHelper.compareRecords);
        },
        response => {
          if ('Unauthorized' == response.statusText) {
            this.router.navigateByUrl('Login');
          }

          console.log("POST call in error", response.statusText);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  updateCompareRecords(result) {
    if (JSON.stringify(this.compareHelper.compareRecords) != JSON.stringify(result)) {
      this.compareHelper.compareRecords = result;
    }
  }
}

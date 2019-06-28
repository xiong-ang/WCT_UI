import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './AuthPage/login-page/login-page.component';
import { ConfigPageComponent } from './ConfigPage/config-page/config-page.component';
import { ResultPageComponent } from './ResultPage/result-page/result-page.component';
import { RegistePageComponent } from './AuthPage/registe-page/registe-page.component';

const routes: Routes =  [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Registe', component: RegistePageComponent },
  { path: 'Config', component: ConfigPageComponent },
  { path: 'Result', component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

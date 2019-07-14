import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './AuthPage/login-page/login-page.component';
import { ConfigPageComponent } from './ConfigPage/config-page/config-page.component';
import { ResultPageComponent } from './ResultPage/result-page/result-page.component';
import { RegistePageComponent } from './AuthPage/registe-page/registe-page.component';
import { CompareStatusComponent } from './ConfigPage/compare-status/compare-status.component';
import { TreeViewComponent } from './ResultPage/tree-view/tree-view.component';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { TableViewComponent } from './ResultPage/table-view/table-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ConfigPageComponent,
    ResultPageComponent,
    RegistePageComponent,
    CompareStatusComponent,
    TreeViewComponent,
    jqxPanelComponent,
    jqxTreeComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

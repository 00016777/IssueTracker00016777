import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { API_BASE_URL } from 'Nswag/IssueTrackerNswag';
const routes : Routes = [
   {
      path:'issues',
      component:IssuesComponent
   },
   {
      path: 'users',
      component: UsersComponent
   }

]

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes),
    MenubarModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue : 'https://localhost:7069'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

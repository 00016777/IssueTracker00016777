import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { API_BASE_URL } from 'Nswag/IssueTrackerNswag';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {MatDialogModule} from '@angular/material/dialog';
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
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MenubarModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ProgressBarModule,
    ButtonModule,
    CalendarModule,
    ToastModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue : 'https://localhost:7069'},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

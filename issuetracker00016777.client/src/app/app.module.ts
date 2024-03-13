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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { IssueDetailsComponent } from './issues/issue-details/issue-details.component';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialExampleModule } from './material.example.module';

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
    IssueDetailsComponent,
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
    ToastModule,
    MatDialogModule,
    CommonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialExampleModule,
    MatNativeDateModule,
  ],
  providers: [
    {provide: API_BASE_URL, useValue : 'https://localhost:7069'},
    MessageService,
    MatDialog
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }

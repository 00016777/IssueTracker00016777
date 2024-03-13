import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IssueDTO, IssuePriority00016777 } from 'Nswag/IssueTrackerNswag';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issueDataTransfer!: IssueDTO;
  issueDetailsIsClosed = true;
  
  constructor() { }


  get getPriorityKeys()
  {
     return Object.keys(IssuePriority00016777).filter(p => isNaN(Number(p)));
  }

  get getPriorityValues() 
  {
    return Object.values(IssuePriority00016777).filter(p => !isNaN(Number(p)));
  }

  getPriorityName(priority: number)
  {
    return Object.keys(IssuePriority00016777).filter(p => isNaN(Number(p)))[priority];
  }
}




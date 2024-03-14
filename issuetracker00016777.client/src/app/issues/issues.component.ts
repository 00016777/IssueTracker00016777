import { Component, OnInit } from '@angular/core';
import { Issue00016777Client, IssueDTO, IssuePriority00016777 } from 'Nswag/IssueTrackerNswag';
import { MessageService } from 'primeng/api';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueService } from './issue.service';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  providers: [MatDialog]
})
export class IssuesComponent implements OnInit {

  
  constructor(private messageService: MessageService,
              public service: IssueService,
              private matDialog: MatDialog,
              private issueClient: Issue00016777Client)
              { 
              }

  ngOnInit(): void {
    this.service.loadIssues();
    this.service.loadUsers();
  }

  getColorIssuePriority(issuePriority?: IssuePriority00016777)
  {
    switch(issuePriority)
    {
       case IssuePriority00016777.None : return 'white';break;
       case IssuePriority00016777.Low : return'yellow';break;
       case IssuePriority00016777.Medium: return 'orange';break;
       case IssuePriority00016777.High:return 'orangered'; break;
       case IssuePriority00016777.VerHigh:return 'red'; break;
       default:return 'white';break;
    }
  }
  getPriorityName(priority?: IssuePriority00016777)
  {
    return IssuePriority00016777[priority?? IssuePriority00016777.None];
  }

  getNameOfUsers(issue?: IssueDTO)
  {
     return issue?.users?.map(u => u.userName).join(", ");
  }

  openIssueDetails(issueId?: number)
  {
    this.issueClient.getIssueById(issueId).subscribe({
      next:(issue) => 
      {
        this.service.issueDataTransfer = issue;
        this.service.SelectedUserLoad();
        const dialog = this.matDialog.open(IssueDetailsComponent,
          {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '70%',
            width: '70%',
            panelClass: 'mat-border',
            disableClose: true
          });
      }


    })
    

   
  }

}

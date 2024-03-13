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

  issues: IssueDTO[] = [];
  constructor(private issueClient: Issue00016777Client,
              private messageService: MessageService,
              private service: IssueService,
              private matDialog: MatDialog)
              { 
              }

  ngOnInit(): void {
    this.loadIssues();
  }


  loadIssues()
  {
    this.issueClient.getAllIssues('')
                    .subscribe(comingIssues => this.issues = comingIssues);
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

  openIssueDetails(issue: IssueDTO)
  {
    this.service.issueDataTransfer = issue;
    if(this.service.issueDetailsIsClosed)
    {
      const dialog = this.matDialog.open(IssueDetailsComponent,
        {
          maxWidth: '100vw',
          maxHeight: '100vh',
          height: '70%',
          width: '70%',
          disableClose: true,
  
        });
      dialog.afterOpened().subscribe(()=> this.service.issueDetailsIsClosed = false);

      dialog.afterClosed().subscribe(()=> this.service.issueDetailsIsClosed = true);
    }

   
  }

}

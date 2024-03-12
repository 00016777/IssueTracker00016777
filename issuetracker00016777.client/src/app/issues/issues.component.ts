import { Component, OnInit } from '@angular/core';
import { Issue00016777Client, IssueDTO, IssuePriority00016777 } from 'Nswag/IssueTrackerNswag';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issues: IssueDTO[] = [];
  constructor(private issueClient: Issue00016777Client,
              private messageService: MessageService) { }

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
     return issue?.users?.map(u => u.userName).join(",");
  }
}

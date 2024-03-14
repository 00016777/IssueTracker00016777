import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Issue00016777Client, IssueDTO, IssuePriority00016777, User0001677Client, UserDTO } from 'Nswag/IssueTrackerNswag';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issueDataTransfer: IssueDTO = {} as IssueDTO;
  issues: IssueDTO[] = [];
  issueDetailsIsClosed = true;
  userDtos: UserDTO[] = [];
  selectedUsersDict: { [key: number] : boolean | undefined} = {};

  constructor(private user0001677Client: User0001677Client, private issueClient: Issue00016777Client) 
  { }


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

  loadUsers()
  {
    this.user0001677Client.getAllUsers('').subscribe(
      {
        next:u =>
        {
          this.userDtos = u;
          this.SelectedUserLoad();
        }
      } 
     
    );
  }
  
  SelectedUserLoad()
  {
    this.userDtos.forEach(u => 
      {
         this.selectedUsersDict[u.id!] = this.issueDataTransfer.users?.map(x=> x.id).includes(u.id)
      });
  }
  loadIssues()
  {
    this.issueClient.getAllIssues('')
                    .subscribe(comingIssues => this.issues = comingIssues);
  }

}




import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../issue.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AddOrDeleteUserFormIssue, Issue00016777Client, IssueDTO, IssuePriority00016777, User0001677Client, UserDTO } from 'Nswag/IssueTrackerNswag';
import { MatSelectionList } from '@angular/material/list';
import { MessageService } from 'primeng/api';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  formIsdisabled = true;
  selectedUserIds: number[] = [];
  issueForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    priority: new FormControl(),
    users: new FormControl()
  })

  constructor(public service: IssueService,
              private issueClient : Issue00016777Client,
              private messageService: MessageService,
              private issueDetailsDialog: MatDialogRef<IssueDetailsComponent>) 
  {
    this.issueForm.patchValue(this.service.issueDataTransfer);
    this.issueForm.disable();    
  }

  
  ngOnInit(): void {
  }


  saveIssue()
  {
    this.issueClient.createOrUpdateIssue(this.issueForm.value as IssueDTO)
                    .subscribe(
                    {
                      next:comingIssueId =>
                      {
                        if(comingIssueId > 0)
                        {
                          this.service.loadIssues();
                          this.messageService.add({severity:'success', summary: 'Success', detail:'Issue success saved'});
                          this.issueClient
                          .addOrDeleteIssueFromUser({userIds: this.selectedUserIds, issueId: comingIssueId} as AddOrDeleteUserFormIssue)
                          .subscribe(
                            {
                              next: usersIsSaved =>
                              {
                                if(usersIsSaved)
                                {
                                  this.messageService.add({severity:'success', summary: 'Success', detail:'Users saved to issue'});
                                  
                                }
                                else 
                                {
                                  this.messageService.add({severity:'error', summary: 'Error', detail:'Something went wrong!'});
                                }
                                 
                              }
                            }
                          )
                        }
                        else 
                        {
                          this.messageService.add({severity:'error', summary: 'Error', detail:'Something went wrong!'});
                        }
                      }});
      this.issueDetailsDialog.close();
  }


  deleteIssue()
  {
    this.issueClient.deleteIssueById(this.service.issueDataTransfer.id)
                    .subscribe(
                      {
                        next:isDeleted =>
                        {
                          this.service.loadIssues();
                          if(isDeleted)
                          {
                            this.messageService.add({severity:'success', summary: 'Success', detail:'Issue successfully deleted'});
                          }
                          else 
                          {
                            this.messageService.add({severity:'error', summary: 'Error', detail:'Something went wrong!'});
                          }
                        }
                      }
                    )
     this.issueDetailsDialog.close();
  }

  editIssue()
  {
    this.issueForm.enable();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IssuePriority00016777 } from 'Nswag/IssueTrackerNswag';
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  formIsdisabled = true;
  issueForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    priority: new FormControl(),
    users: new FormControl()
  })

  constructor(public service: IssueService) {
    this.issueForm.patchValue(this.service.issueDataTransfer);
    this.issueForm.disable();

    
  }

  ngOnInit(): void {
    console.log(this.issueForm);

    const priority: keyof typeof IssuePriority00016777 = 'None';


   
  }


  saveIssue()
  {

  }

  editIssue()
  {
    this.issueForm.enable();
  }
}

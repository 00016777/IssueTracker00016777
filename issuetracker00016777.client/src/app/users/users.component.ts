import { Component, OnInit } from '@angular/core';
import { Issue00016777Client, User0001677Client } from 'Nswag/IssueTrackerNswag'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private User0001677Client: User0001677Client) { }

  ngOnInit(): void {
    this.User0001677Client.getUserById(1).subscribe({
      next:(u) => 
      {
        console.log(u);
      }
    })
  }

}

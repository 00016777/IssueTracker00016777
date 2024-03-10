import { Component, OnInit } from '@angular/core';
import {  Sex00016777, User0001677Client, UserDTO } from 'Nswag/IssueTrackerNswag'
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userDtos: UserDTO[] = [];
  userSexes: SelectItem[] = [];
  constructor(private User0001677Client: User0001677Client) 
  { 
    this.userSexes = [
    {label: 'Not set', value: Sex00016777.NotSet},
    {label: 'Man', value: Sex00016777.Man},
    {label: 'Woman', value: Sex00016777.Woman}
  ]
  }


   
  ngOnInit(): void {
    this.User0001677Client.getUserById(1).subscribe({
      next:(u) => 
      {
        console.log(u);
      }
    })
  }

  onRowEditInit(user: UserDTO) {
    
}

onRowEditSave(user: UserDTO) {
    
}

onRowEditCancel(user: UserDTO, index: number) {
   
}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Sex00016777,
  User0001677Client,
  UserDTO,
} from 'Nswag/IssueTrackerNswag';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild('userTable') userTable: any;
  
  userDtos: UserDTO[] = [];
  userSexes: SelectItem[] = [];
  constructor(private user0001677Client: User0001677Client,
              private messageService: MessageService) {
    this.userSexes = [
      { label: 'Not set', value: Sex00016777.NotSet },
      { label: 'Man', value: Sex00016777.Man },
      { label: 'Woman', value: Sex00016777.Woman },
    ];
  }

  ngOnInit(): void {
   this.loadUsers();
  }

  loadUsers()
  {
    this.user0001677Client.getAllUsers('').subscribe(
      (users) => (this.userDtos = users)
    );
  }

  onRowEditInit(user: UserDTO) {
    console.log("edit", user);
  }

  onRowEditSave(user: UserDTO) {
    this.user0001677Client.createOrUpdateUser(user)
                          .subscribe({
                            next:isSave =>
                            {
                              if(isSave)
                              {
                                this.messageService.add({severity:'success', summary: 'Success', detail:'User is added or update'});
                                if(!user.id)
                                {
                                  this.loadUsers();
                                }
                              }
                              else 
                              {
                                this.messageService.add({severity:'error', summary: 'Error', detail:'Something went wrong!'});
                              }

                            }
                          });

  }

  onRowEditCancel(user: UserDTO, index: number) {
    console.log("cancel", user);
  }

  addNewUserTest()
  {
    this.userDtos.unshift({} as UserDTO);
    this.userTable?.initRowEdit({});
  }
  deleteUser(user: UserDTO)
  {
    this.user0001677Client.deleleUserById(user.id)
                           .subscribe({
                            next:IsDeleted=>
                            {
                              if(IsDeleted)
                              {
                                this.messageService.add({severity:'success', summary: 'Success', detail:'User is Successfully deleted'});
                                this.loadUsers();
                              }
                              else 
                              {
                                this.messageService.add({severity:'error', summary: 'Error', detail:'Something went wrong!'});
                              }
                            }
                           })
  }
}

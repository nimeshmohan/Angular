import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponent } from "./header/header.components";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headercomponent, UserComponent, TasksComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

 
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  users = DUMMY_USERS;
  
  selectdUserId?: string;

  get selectedUser(){
    return this.users.find((user)=>
      this.selectdUserId === user.id
    );
  }

  onSelectUser(id:string){
    this.selectdUserId = id; 
  }

  
}

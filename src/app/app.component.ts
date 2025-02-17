import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';



@Component({
  selector: 'app-root',
  standalone: false,
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

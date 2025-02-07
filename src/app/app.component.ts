import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponent } from "./header/header.components";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headercomponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-app';
}

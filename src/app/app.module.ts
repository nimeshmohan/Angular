import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Headercomponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, Headercomponent,UserComponent, TasksComponent]
})
export class AppModule {}
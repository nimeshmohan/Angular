import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Headercomponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';



@NgModule({
    declarations: [AppComponent, Headercomponent, UserComponent, ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule { }
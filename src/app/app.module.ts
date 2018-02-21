import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TransitComponent } from './transit/transit.component';
import { UserService } from './user.service';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    MenuComponent,
    TransitComponent,
    CreateScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

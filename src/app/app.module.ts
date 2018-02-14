import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TransitComponent } from './transit/transit.component';

const myRoot: Routes = [
  { path: 'register', component: MenuComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    MenuComponent,
    TransitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

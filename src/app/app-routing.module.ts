import { NgModule } from '@angular/core';
import {ScheduleComponent} from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

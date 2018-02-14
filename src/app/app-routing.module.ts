import { NgModule } from '@angular/core';
import {ScheduleComponent} from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TransitComponent } from './transit/transit.component';

const routes: Routes = [
  {path: '', component: MenuComponent, pathMatch:'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'transit', component: TransitComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {UserService} from '../user.service';
import {Driver} from '../model/driver/driver';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  drivers: Driver[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let drivers = this.getDrivers();
  } 

  getDrivers(){
    this.userService.getDrivers().subscribe(data => this.drivers = data);
  }
}



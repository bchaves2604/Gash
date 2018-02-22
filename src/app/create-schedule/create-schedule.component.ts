import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {UserService} from '../user.service';
import {Driver} from '../model/driver/driver';
import {Schedules} from '../model/schedule/grid-schedule-mock';
import {Schedule} from '../model/schedule/schedule';


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
  addSchedule(mondayEntrance: String, tuesdayEntrance: String, wednesdayEntrance: String, thursdayEntrance: String, fridayEntrance: String, saturdayEntrance: String, 
    sundayEntrance: String, mondayOut: String, tuesdayOut: String, wednesdayOut: String, thursdayOut: String, fridayOut: String, saturdayOut: String, sundayOut: String,
     driverNationalId: String){
      let schedule= new Schedule();
      schedule.mondayEntrance=mondayEntrance;
      schedule.tuesdayEntrance=tuesdayEntrance;
      schedule.wednesdayEntrance=wednesdayEntrance;
      schedule.thursdayEntrance=thursdayEntrance;
      schedule.fridayEntrance=fridayEntrance;
      schedule.saturdayEntrance=saturdayEntrance;
      schedule.sundayEntrance=sundayEntrance;
      schedule.mondayOut=mondayOut;
      schedule.tuesdayOut=tuesdayOut;
      schedule.wednesdayOut=wednesdayOut;
      schedule.thursdayOut=thursdayOut;
      schedule.fridayOut=fridayOut;
      schedule.saturdayOut=saturdayOut;
      schedule.sundayOut=sundayOut;
      this.userService.addSchedule(schedule)
      .subscribe();
  }
}



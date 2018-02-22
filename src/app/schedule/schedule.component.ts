import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {Schedules} from '../model/schedule/grid-schedule-mock';
import {UserService} from '../user.service';
import {Driver} from '../model/driver/driver';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {

  schedules= Schedules;

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {

  }
  getColor(out, entrance){
    var entranceHour= entrance.charAt(entrance.length-8)+entrance.charAt(entrance.length-7);
    var outHour=  out.charAt(out.length-8)+out.charAt(out.length-7);
    var entranceTime =entrance.charAt(entrance.length-2) + entrance.charAt(entrance.length-1);    
    var outTime =out.charAt(out.length-2) + out.charAt(out.length-1);

    if(outTime==="pm" && outHour!=12){
      outHour=parseInt(outHour) +12;
    }
    if(entranceTime==="pm" && entranceHour!=12)
    {
      entranceHour=parseInt(entranceHour) +12;
    }

    if(entranceHour== 12 && entranceTime==="am" )
    {
      entranceHour=parseInt(entranceHour) -12;
    }

    if(outHour== 12 && outTime==="am" )
    {
      outHour=parseInt(outHour) -12;
    }

    console.log('entrance: '+entranceHour);
    console.log('out: '+outHour);
    var diff=Math.abs(outHour-entranceHour);
    console.log('diff: '+diff);
    if(diff<10){
      //green
      return '#04B45F';
    }
    
    else if(diff>=10 && diff<12){
      //yellow
      return '#F4FA58';
    }
    else if(diff>=12){
      //red
      return '#FE2E2E';
    }
  }

  addDriver(driverName: string, driverNid: string, driverBirthDate: string, driverPhoneNumber: string){
    driverName.trim();
    let driver= new Driver();
    driver.driverName=driverName;
    driver.driverNationalId=driverNid;
    driver.driverBirthDate=driverBirthDate;
    driver.driverTelephoneNumber=driverPhoneNumber;
    this.userService.addDriver(driver)
      .subscribe();
  }


}

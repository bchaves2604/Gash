import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {Schedules} from '../model/schedule/grid-schedule-mock';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules= Schedules;

  constructor() {
    
  }

  ngOnInit() {

  }
  getColor(out){
    var time =out.charAt(out.length-2) + out.charAt(out.length-1);
    var hour=  out.charAt(out.length-8)+out.charAt(out.length-7)
    var date= new Date();
    var currentHour= date.getHours();

    if(time==="pm" && hour!=12){
      hour=parseInt(hour) +12;
    }
    var diff=Math.abs(currentHour-hour);

    console.log('hour: ' + hour + ' '+'currentHour: '+ currentHour + ' ' +'diff: ' + diff);
    if(hour>currentHour && diff>1){
      //green
      return '#04B45F'
    }
    
    else if(hour>currentHour && diff<=1){
      //yellow
      console.log('yellow');
      return '#F4FA58'
    }
    else if(hour<=currentHour){
      //red
      return '#FE2E2E'
    }
  }


}

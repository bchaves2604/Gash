import { Component, OnInit } from '@angular/core';
import {Transits} from '../model/transit/grid-transit-mock';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {

  transits= Transits;
  constructor() { }

  ngOnInit() {
  }

  getColor(arrive){
    var time =arrive.charAt(arrive.length-2) + arrive.charAt(arrive.length-1);
    var hour=  arrive.charAt(arrive.length-8)+arrive.charAt(arrive.length-7)
    var date= new Date();
    var currentHour= date.getHours();

    if(time==="pm" && hour!=12){
      hour=parseInt(hour) +12;
    }
    var diff=Math.abs(currentHour-hour);
    if(hour>currentHour && diff>1){
      //green
      return '#04B45F'
    }
    else if( hour>currentHour && diff<=1){
      //yellow
      return '#F4FA58'
    }
    else if(hour<=currentHour){
      //red
      return '#FE2E2E'
    }
  }
}

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
    setTimeout(function(){
     location.reload();
    },300000);
  }

  getColor(out, arrive){
    var outHour= out.charAt(out.length-8)+out.charAt(out.length-7);
    var arriveHour=  arrive.charAt(arrive.length-8)+arrive.charAt(arrive.length-7);
    var outTime =out.charAt(out.length-2) + out.charAt(out.length-1);    
    var arriveTime =arrive.charAt(arrive.length-2) + arrive.charAt(arrive.length-1);
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentday= currentDate.getDay();
    var workedHours=0;
    if(arriveTime==="pm" && arriveHour!=12){
      arriveHour=parseInt(arriveHour) +12;
    }
    if(outTime==="pm" && outHour!=12)
    {
      outHour=parseInt(outHour) +12;
    }

    if(outHour== 12 && outTime==="am" )
    {
      outHour=parseInt(outHour) -12;
    }

    if(arriveHour== 12 && arriveTime==="am" )
    {
      arriveHour=parseInt(arriveHour) -12;
    }
    
    var scheduledHours=Math.abs(outHour-currentHour);
    workedHours=scheduledHours;
    if(outTime==='pm' && arriveTime==='am'){
      workedHours=Math.abs(outHour-currentHour);
      console.log(outHour+'-'+currentHour);
    }
    
    if(currentHour>arriveHour){
      console.log(currentHour-arriveHour);
      workedHours=Math.abs(scheduledHours)+ Math.abs(currentHour-arriveHour);
    }
    
    console.log(" entrance: "+outHour+" out: "+arriveHour);
    console.log('total: '+workedHours);
    if(workedHours<10 && currentHour>=outHour){
      //green
      return '#04B45F';
    }
    else if(workedHours>=10 && workedHours<12){
      //yellow
      return '#F4FA58';
    }
    else if(workedHours>=12 || outHour>currentHour){
      //red
      return '#FE2E2E';
    }
  }
  
}

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

  getColor(out, arrive){
    var outHour= out.charAt(out.length-8)+out.charAt(out.length-7);
    var arriveHour=  arrive.charAt(arrive.length-8)+arrive.charAt(arrive.length-7);
    var outTime =out.charAt(out.length-2) + out.charAt(out.length-1);    
    var arriveTime =arrive.charAt(arrive.length-2) + arrive.charAt(arrive.length-1);

    if(arriveTime==="pm" && arriveHour!=12){
      outHour=parseInt(outHour) +12;
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

    /*console.log('entrance: '+entranceHour);
    console.log('out: '+outHour);*/
    var diff=Math.abs(arriveHour-outHour);
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
}

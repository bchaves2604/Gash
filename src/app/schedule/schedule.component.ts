import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Schedules} from '../model/schedule/grid-schedule-mock';
import {UserService} from '../user.service';
import {Driver} from '../model/driver/driver';
import {Truck} from '../model/truck/truck';
import { ToastsManager } from 'ng2-toastr';
import { $ } from 'protractor';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {

  private trucks: Truck[];
  schedules= Schedules;
  private showErrorLabel: boolean=false;
<<<<<<< HEAD
  selectedValue;
  statusList= ['Ingreso a Terminal','Orden de Alistado', 'Orden de Despacho','Salida de Terminal'];

=======
  
>>>>>>> parent of e42ac13... Adding changes to insert schedule to multiple drivers

  constructor(private userService: UserService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    let trucks = this.getTrucks();
    setTimeout(function(){
      location.reload();
     },300000);
  }

  getTrucks(){
    this.userService.getTrucks().subscribe(data => this.trucks = data);
  }

  showSuccess() {
    this.toastr.success('Horario agregado exitosamente!', 'Exito');
  }

  showError() {
    this.toastr.error('Por favor llenar todos los espacios', 'Error');
  }

  invalidForm(){
    this.showErrorLabel=true
  }

  getColorSchedule(entrance, out){
    var entranceHour= entrance.charAt(entrance.length-8)+entrance.charAt(entrance.length-7);
    var outHour=  out.charAt(out.length-8)+out.charAt(out.length-7);
    var entranceTime =entrance.charAt(entrance.length-2) + entrance.charAt(entrance.length-1);
    var outTime =out.charAt(out.length-2) + out.charAt(out.length-1);
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentday= currentDate.getDay();
    var workedHours=0;

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

    if(entranceHour>=currentHour){
      var scheduledHours=Math.abs(entranceHour-currentHour);
    }
    else{
      var scheduledHours=Math.abs(currentHour-entranceHour);
    }

    workedHours=scheduledHours;

    if(workedHours<10 && currentHour>=entranceHour){
      //green
      return '#04B45F';
    }
    else if(workedHours>=10 && workedHours<12){
      //yellow
      return '#F4FA58';
    }
    else if(workedHours>=12 && entranceHour<currentHour){
      //red
      return '#FE2E2E';
    }
  }

  getColorStatus(entrance){
    var currentDate = new Date();
    var minutes = currentDate.getMinutes();
    var entranceMinutes= entrance.charAt(entrance.length-5)+entrance.charAt(entrance.length-4);
    var lastProcess;
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var entranceHour=   entrance.charAt(entrance.length-8)+entrance.charAt(entrance.length-7);
    var entranceTime =entrance.charAt(entrance.length-2) + entrance.charAt(entrance.length-1);

    if(entranceTime==="pm" && entranceHour!=12)
    {
      entranceHour=parseInt(entranceHour) +12;
    }
    if(entranceHour== 12 && entranceTime==="am" )
    {
      entranceHour=parseInt(entranceHour) -12;
    }
<<<<<<< HEAD

    if(currentHour > entranceHour){
      lastProcess=minutes+(60-entranceMinutes);
      var diff= Math.abs(currentHour - entranceHour);
    }

    if(currentHour > entranceHour){
      lastProcess=minutes+(60*diff-entranceMinutes);
=======
  
    if(currentHour > entranceHour){
      lastProcess=minutes+(60-entranceMinutes);
>>>>>>> parent of e42ac13... Adding changes to insert schedule to multiple drivers

    }
    else{
      lastProcess= Math.abs(minutes-entranceMinutes);
    }
<<<<<<< HEAD

    var diff= Math.abs(currentHour - entranceHour);
    console.log(lastProcess);
    if(lastProcess<=30 && minutes>entranceMinutes && currentHour===Math.abs(entranceHour)){
=======
    
    var diff= Math.abs(currentHour - entranceHour); 
    console.log(lastProcess);
    if(lastProcess<=30 && minutes>entranceMinutes && currentHour===entranceHour){
>>>>>>> parent of e42ac13... Adding changes to insert schedule to multiple drivers
      //green
      return '#04B45F';
    }

    else if(lastProcess>30 && lastProcess<61 && diff<2 && currentHour>=entranceHour){
      //yellow
      return '#F4FA58';
    }

    else if(lastProcess>60 && diff>=1){
      //red
      return '#FE2E2E';
    }
  }

  addDriver(driverName: string, driverNid: string, driverBirthDate: string, driverPhoneNumber: string){
    if(driverName!='' && driverNid!='' && driverBirthDate!='' && driverPhoneNumber!=''){
      let driver= new Driver();
      driver.driverName=driverName.trim();
      driver.driverNationalId=driverNid.trim();
      driver.driverBirthDate=driverBirthDate;
      driver.driverTelephoneNumber=driverPhoneNumber.trim();
      driver.truckId = this.selectedValue.truckId;
      this.userService.addDriver(driver)
        .subscribe();
      this.showSuccess();

    }
    else{
      this.showError();
    }

  }
<<<<<<< HEAD
  changeStatus(id,status){
    var i;
    for(i=0;i< this.statusList.length;i++){
      if(this.statusList[i]===status){
        if(i+1<this.statusList.length){
          this.searchScheduleGrid(id,this.statusList[i+1]);
          return;
        }
        else{
          this.searchScheduleGrid(id, this.statusList[0]);
          return;
        }
      }
    }
  }

  searchScheduleGrid(id,status){
    var i;  
    for(i=0;i<this.schedules.length;i++){
      if(this.schedules[i].id===id){
        this.schedules[i].processStatus=status;
      }
    }
  }
=======
>>>>>>> parent of e42ac13... Adding changes to insert schedule to multiple drivers
}

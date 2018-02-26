import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

  private drivers: Driver[];
  selectedOption;
  private emptySchedule: string;
  private show: boolean=false;

  constructor(private userService: UserService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  
  ngOnInit() {
    let drivers = this.getDrivers();
  } 
  
  showSuccess() {
    this.toastr.success('Horario agregado exitosamente!', 'Exito');
  }

  showError() {
    this.toastr.error('Por favor llenar todos los espacios y seleccionar un chofer!', 'Horario Invalido');
  }

  getDrivers(){
    this.userService.getDrivers().subscribe(data => this.drivers = data);
  }
  addSchedule(mondayEntrance: String, tuesdayEntrance: String, wednesdayEntrance: String, thursdayEntrance: String, fridayEntrance: String, saturdayEntrance: String, 
    sundayEntrance: String, mondayOut: String, tuesdayOut: String, wednesdayOut: String, thursdayOut: String, fridayOut: String, saturdayOut: String, sundayOut: String,
     driverNationalId: String){
      if(mondayEntrance!='' && tuesdayEntrance!='' && wednesdayEntrance!=''&& thursdayEntrance!=''&& fridayEntrance!=''&& saturdayEntrance!=''&& sundayEntrance!=''
      && mondayOut!=''&& tuesdayOut!=''&& wednesdayOut!=''&& thursdayOut!=''&& fridayOut!=''&& saturdayOut!=''&& sundayOut!=''){
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
        console.log('selectedOption: '+this.selectedOption);
        if(this.selectedOption!='default' && this.selectedOption!=undefined){
          this.selectedOption =this.getSubstring(this.selectedOption);
          this.userService.addSchedule(schedule,this.selectedOption)
        .subscribe();
        this.showSuccess();
        this.selectedOption=undefined;
        }
        else{
          this.showError();
        }
      }
      else{
        this.showError();
      }
     
  }

  getSubstring(selectedOption): string{
    var i;
    var nationalId="";
    for(i=selectedOption.length;i>=0;i--){
      if(selectedOption.charAt(i)==='-'){
        return nationalId.trim();
      }
      nationalId= selectedOption.charAt(i)+nationalId;
    }
  }

  textScheduleEmpty(textValue){
    console.log(this.selectedOption);
    if (textValue === '' || this.selectedOption==='') {
      this.emptySchedule='invalid'; 
    }
  }

  invalidForm(){
      this.show=true
  }

  seleactAll(){
    for (var i = 0; i < this.drivers.length; i++) {
      this.drivers[i].selected = !this.drivers[i].selected;
    }
  }
}



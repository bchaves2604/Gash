import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('here')
    this.route.params.subscribe(res => console.log(res));
  }

  ngOnInit() {

  }

}

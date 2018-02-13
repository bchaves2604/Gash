import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gash';

  constructor(private router: Router) {
    
  }

  showSchedule(){
    console.log("switching views")
    this.router.navigateByUrl("/schedule");
  }
}

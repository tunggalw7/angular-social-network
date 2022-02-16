import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {    
    activities : any;
    
    constructor(
      public _service: PageService,
    ) {

    }
  
    ngOnInit(): void {
      this.getActivities();
    }

    getActivities(){
      this._service.getActivities().subscribe(
        res => {
          this.activities = res;
        }
      );
    }
}

import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss', '../app.component.scss']
})
export class PeopleComponent implements OnInit {    
  peoples: any;
  
  constructor(
    public _service: PageService,
  ) {

  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this._service.getPeoples().subscribe(
      res => {
        this.peoples = res;
      }
    );
  }

}

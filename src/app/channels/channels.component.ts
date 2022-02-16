import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {  
    channels: any; 
    
    constructor(
      public _service: PageService
    ) {
      debugger
    }
  
    ngOnInit(): void {
      this.getChannels();
    }

    getChannels(){
      this._service.getChannels().subscribe(
        res => {
          debugger
          this.channels = res;
        }
      );
    }
}

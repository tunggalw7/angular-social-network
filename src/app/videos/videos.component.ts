import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss', '../app.component.scss']
})
export class VideosComponent implements OnInit {    
    videos: any;
    
    constructor(
      public _service: PageService,
    ) {

    }
  
    ngOnInit(): void {
      this.getVideos();
    }

    getVideos(){
      this._service.getVideos().subscribe(
        res => {
          this.videos = res;
        }
      );
    }

}

import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss', '../app.component.scss']
})
export class DocumentsComponent implements OnInit {    
  documents: any;
  
  constructor(
    public _service: PageService,
  ) {

  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(){
    this._service.getDocuments().subscribe(
      res => {
        this.documents = res;
      }
    );
  }

}

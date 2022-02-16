import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from '../_helper/handle.error';

@Injectable({ providedIn: 'root' })

export class PageService {
    apiUrl = "https://tm7p77g7ni.api.quickmocker.com";
    
    constructor(private http: HttpClient, private handleErrorService: HandleErrorService) {
   
    }    

    getVideos() {
        return this.http.get(`${this.apiUrl}/videos `)
        .pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            ),
        );
    }    
    
    getPeoples() {
        return this.http.get(`${this.apiUrl}/peoples `)
        .pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            ),
        );
    }    

    getDocuments() {
        return this.http.get(`${this.apiUrl}/documents `)
        .pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            ),
        );
    }    

    getActivities() {
        return this.http.get(`${this.apiUrl}/activities `)
        .pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            ),
        );
    }  

    getChannels() {
        return this.http.get(`${this.apiUrl}/channels `)
        .pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            ),
        );
    }  
}

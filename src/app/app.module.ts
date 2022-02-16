import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityComponent } from './activity/activity.component';

import { HttpClientModule , HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { DocumentsComponent } from './documents/documents.component';
import { PeopleComponent } from './people/people.component';
import { PageService } from './services/page.service';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ActivityComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

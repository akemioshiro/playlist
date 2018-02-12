
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { VideolistComponent } from './videolist.component';
import { VideoDetailComponent } from './videodetail.component'

@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    VideoDetailComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

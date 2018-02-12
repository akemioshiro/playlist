

import { Component } from '@angular/core';

import { Config } from './config.service';
import { Video } from './video';
import { VideolistComponent } from './videolist.component';
import { VideoDetailComponent } from './videodetail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Config.TITLE_PAGE;
  videos:Array<Video>;
  selectedVideo:Video; // controla o video selecionado pelo videolist

  constructor() {
    this.videos = [
      new Video(1,"teste1", 'https://www.youtube.com/watch?v=YE9A6NtlkmQ', 'test descriptopm'),
      new Video(2,"teste2", 'https://www.youtube.com/watch?v=YE9A6NtlkmQ', 'test2 descriptopm')
    ]    
  }

  onSelectVideo(video){
    console.log("no app component:" + JSON.stringify(video));
    this.selectedVideo = video;
  }
}

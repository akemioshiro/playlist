import { EventEmitter } from '@angular/core';
import { Input,Component, OnInit } from '@angular/core';
import { Video } from "./Video";


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  inputs: ['videos'],
  outputs:['selectVideo']
})
export class VideolistComponent implements OnInit {

  // @Input() videos;
  // @output() selectVideo = new EventEmitter()

  selectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(video:Video){
    this.selectVideo.next(video);
    console.log("na lista de components: " + JSON.stringify(video));
  }

}

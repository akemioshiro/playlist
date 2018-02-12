import {Component, EventEmitter} from '@angular/core';
import { Video } from "./Video";

@Component({ 
    selector:'video-detail', 
    templateUrl: './videodetail.component.html', 
    inputs: ['video'] 
}) 

export class VideoDetailComponent{
    private editTitle:boolean = false;
    onTitleClick()
    {
        this.editTitle = true;
    }
    onButtonOkClick()
    {

    }
    ngOnChanges() {
        this.editTitle = false;        
    }
}

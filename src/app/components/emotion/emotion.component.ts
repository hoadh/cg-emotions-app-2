import {Component, Input, OnInit} from '@angular/core';
import {Emotion} from '../../models/emotion';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent implements OnInit {

  @Input() emotion: Emotion;
  @Input() fixedSize = false;
  isTextShow = false;
  constructor() {
    this.hideText();
  }

  ngOnInit() {
  }

  showText() {
    this.isTextShow = true;
  }

  hideText() {
    this.isTextShow = false;
  }

}

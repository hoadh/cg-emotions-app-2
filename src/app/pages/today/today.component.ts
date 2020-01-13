import { Component, OnInit } from '@angular/core';
import {Emotion} from '../../models/emotion';
import {Router} from '@angular/router';
import {MessageService} from '../../services/message.service';
import {TrackingService} from '../../services/tracking.service';

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 100;

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  emotions: Emotion[] = [
    {
      name: 'anger',
      imageLink: '/assets/emotions/1.jpg',
      description: 'Tào lao'
    },
    {
      name: 'bad',
      imageLink: '/assets/emotions/2.jpg',
      description: 'Không tốt'
    },
    {
      name: 'normal',
      imageLink: '/assets/emotions/3.jpg',
      description: 'Bình thường'
    },
    {
      name: 'good',
      imageLink: '/assets/emotions/4.jpg',
      description: 'Khá hạnh phúc'
    },
    {
      name: 'happy',
      imageLink: '/assets/emotions/5.jpg',
      description: 'Siêu hạnh phúc'
    }
  ];
  imageWidth = DEFAULT_WIDTH;
  imageHeight = DEFAULT_HEIGHT;

  constructor(private router: Router, private messageService: MessageService, private trackingService: TrackingService) { }

  ngOnInit() {}

  resetImage() {
    this.imageWidth = DEFAULT_WIDTH;
    this.imageHeight += DEFAULT_HEIGHT;
  }

  goToDetail(emotion: Emotion) {
    this.messageService.setEmotion(emotion);
    this.trackingService.track('Select Emotion', {
      emotion: emotion.name
    });
    // this.trackingService.track('Navigate', { from: '/list', to: '/detail' });
    this.router.navigate(['/detail']);
  }

}

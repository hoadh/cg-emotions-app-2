import { Component, OnInit } from '@angular/core';
import {Emotion} from '../../models/emotion';
import {AuthService} from '../../auth/auth.service';
import {MessageService} from '../../services/message.service';
import {EmotionService} from '../../services/emotion.service';
import {Router} from '@angular/router';
import {TrackingService} from '../../services/tracking.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  emotion: Emotion;
  noteContent: string;
  user: any;
  isLoading = false;
  constructor(
    private auth: AuthService,
    private messageService: MessageService,
    private emotionService: EmotionService,
    private router: Router,
    private trackingService: TrackingService) { }

  ngOnInit() {
    this.emotion = this.messageService.getEmotion();
    this.getProfile();
  }

  getProfile() {
    this.auth.userProfile$.subscribe( profile => {
      this.user = {
        name: profile.name,
        email: profile.email,
        userId: profile.sub
      };
    });
  }

  save() {
    // just accept save emotion if user is logged in
    this.isLoading = true;
    if (this.user) {
      this.emotionService.updateToday({
        emotion: this.emotion,
        note: this.noteContent,
        user: this.user
      })
        .subscribe( result => {
          this.isLoading = false;
          this.trackingService.track('Update Emotion', { user: this.user.userId, emotion: this.emotion.name, status: 'ok' });
          this.trackingService.track('Navigate', { from: '/detail', to: '/thank-you' });
          this.router.navigate(['/thank-you']);
        }, error => {
          this.isLoading = false;
          this.trackingService.track('Update Emotion', { user: this.user.userId, emotion: this.emotion.name, status: 'error', error });
        });
    }
  }

}

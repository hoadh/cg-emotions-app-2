import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {Emotion} from '../../models/emotion';
import {MessageService} from '../../services/message.service';
import {EmotionService} from '../../services/emotion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;
  emotions: Emotion[] = [];
  constructor(public auth: AuthService,
              private messageService: MessageService,
              private emotionService: EmotionService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {
        this.profileJson = JSON.stringify(profile, null, 2);
        // const profile = this.messageService.getProfile();
        if (profile) {
          const userId = profile.sub;
          this.emotionService.getHistory(userId).subscribe( httpResult => {
            this.emotions = httpResult.data;
          });
        }
      }
    );
  }

  getImg(emotion: string) {
    return this.emotionService.getEmotionImageLink(emotion);
  }

  getDescription(emotion: string): string {
    return this.emotionService.getEmotionDescription(emotion);
  }

}

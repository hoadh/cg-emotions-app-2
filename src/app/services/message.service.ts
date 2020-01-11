import { Injectable } from '@angular/core';
import { Emotion } from '../models/emotion';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private emotion: Emotion;
  private profile: Profile;
  constructor() { }

  setEmotion(emotion: Emotion) {
    this.emotion = emotion;
  }

  getEmotion(): Emotion {
    return this.emotion;
  }

  getProfile(): Profile {
    return this.profile;
  }

  setProfile(profile: Profile) {
    console.log(profile);
    this.profile = profile;
  }
}

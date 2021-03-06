import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Profile} from '../models/profile';

declare var mixpanel;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  userId: string;
  isProd = environment.production;
  constructor() {
  }

  identify(userId: string) {
    this.userId = userId;
    if (this.isProd) {
      mixpanel.identify(userId);
    }
  }

  setProfile(profile: Profile) {
    if (this.isProd) {
      mixpanel.people.set({
        $email: profile.email,
        $avatar: profile.picture,
        USER_ID: profile.userId,
        name: profile.name
      });
    }
  }

  track(event: string, data: any) {
    if (this.isProd) {
      mixpanel.track(event, data);
    }
  }

}

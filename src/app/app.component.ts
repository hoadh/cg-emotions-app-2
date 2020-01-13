import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {MessageService} from './services/message.service';
import {TrackingService} from './services/tracking.service';
import {Profile} from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService,
              private messageService: MessageService,
              private trackingService: TrackingService) {
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe( result => {
      if (result) {
        this.handleProfile(result);
      }
    });
  }

  handleProfile(profile: any) {
    const user: Profile = {
      name: profile.name,
      email: profile.email,
      userId: profile.sub,
      picture: profile.picture
    };
    this.messageService.setProfile(user);
    this.trackingService.identify(user.userId);
    this.trackingService.setProfile(user);
  }
}

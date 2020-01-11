import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {TrackingService} from '../../services/tracking.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private trackingService: TrackingService) {}

  ngOnInit() {
  }

  back() {
    this.trackingService.track('Navigate', { from: '/thank-you', to: '/' });
    this.router.navigate(['/']);
  }

}

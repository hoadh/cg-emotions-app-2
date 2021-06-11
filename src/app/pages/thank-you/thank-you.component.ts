import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {TrackingService} from '../../services/tracking.service';
import {QuoteService} from '../../services/quote.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  quote: any;
  isLoading = false;

  constructor(
    public auth: AuthService,
    private quoteService: QuoteService,
    private router: Router,
    private trackingService: TrackingService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.random().subscribe(
      quote => {
        this.quote = quote;
        this.isLoading = false;
      },
      error => {
        console.log("Error after loading quote", error);
        this.isLoading = false;
      });
  }

  toDashboard() {
    window.location.href = 'http://dashboard.happiness.codegym.vn/';
  }

}

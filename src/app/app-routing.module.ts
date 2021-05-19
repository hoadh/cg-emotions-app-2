import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { TodayComponent } from './pages/today/today.component';
import {DetailComponent} from './pages/detail/detail.component';
import {ThankYouComponent} from './pages/thank-you/thank-you.component';

const routes: Routes = [
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: '',
    component: TodayComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

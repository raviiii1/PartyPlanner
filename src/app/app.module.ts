import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { NewPartyService } from './new-party.service';
import { SettingsService } from './settings.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';
import { NewPartyComponent } from './new-party/new-party.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VotePageComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    HomePageComponent,
    CreditsPageComponent,
    NewPartyComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomePageComponent},
      {path:'vote', component:VotePageComponent},
      {path:'upcoming', component:UpcomingEventsComponent},
      {path:'past', component:PastEventsComponent},
      {path:'credits', component:CreditsPageComponent},
      {path:'new-party', component:NewPartyComponent},
      {path:'settings', component:SettingsComponent}
    ])
  ],
  providers: [AuthenticationService, NewPartyService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { NewPartyService } from './new-party.service';
import { SettingsService } from './settings.service';
//import { HttpClientModule }  from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';
import { NewPartyComponent } from './new-party/new-party.component';
import { SettingsComponent } from './settings/settings.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { UserAuthGaurd } from './user.gaurd';
import { AdminAuthGaurd } from './admin.gaurd';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VotePageComponent,
    HomePageComponent,
    CreditsPageComponent,
    NewPartyComponent,
    SettingsComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpClientModule,
	HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomePageComponent},
      {path:'vote', component:VotePageComponent, canActivate: [UserAuthGaurd]},
      {path:'events', component:EventsPageComponent},
      {path:'credits', component:CreditsPageComponent},
      {path:'new-party', component:NewPartyComponent, canActivate: [UserAuthGaurd, AdminAuthGaurd]},
      {path:'settings', component:SettingsComponent, canActivate: [UserAuthGaurd, AdminAuthGaurd]}
    ])
  ],
  providers: [AuthenticationService, NewPartyService, SettingsService, AuthHttp, JwtHelper, AdminAuthGaurd, UserAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }

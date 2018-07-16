import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { routing } from './app.routing';
import { ListUserComponent } from './list-user/list-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlayersService } from './players.service';
import { IsPlayingPipe } from './is-playing.pipe';
import { AddColorDirective } from './add-color.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ListUserComponent,
    UserProfileComponent,
    IsPlayingPipe,
    AddColorDirective
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

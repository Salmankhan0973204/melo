import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentUSComponent } from './content-us/content-us.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { AppInfoComponent } from './app-info/app-info.component';
import { FeaturesComponent } from './features/features.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ScreenShotComponent } from './screen-shot/screen-shot.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
    AboutUsComponent,
    ContentUSComponent,
    FooterComponent,
    AppInfoComponent,
    FeaturesComponent,
    ActivitiesComponent,
    ScreenShotComponent,
    MobileComponent,

  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AngularFullpageModule,

  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

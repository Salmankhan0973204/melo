import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentUSComponent } from './content-us/content-us.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from "angular-responsive-carousel";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContentUSComponent,
    FooterComponent,

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

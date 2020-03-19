import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './config/app-config.model';
import { AppConfig } from './config/app.config';
import { InterceptorsModule } from './core/interceptors/interceptor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    InterceptorsModule.forRoot(APP_CONFIG, AppConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

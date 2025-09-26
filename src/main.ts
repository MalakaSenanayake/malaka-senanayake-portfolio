import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
}).catch(err => console.error(err));

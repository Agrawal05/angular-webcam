import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WebcamModule} from './modules/webcam/webcam.module';
import {FormsModule} from '@angular/forms';
import { AngularWebcamComponent } from './angular-webcam/angular-webcam.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularWebcamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

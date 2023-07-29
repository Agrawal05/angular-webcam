import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularWebcamComponent } from './angular-webcam/angular-webcam.component';

export const routes: Routes = [
    {path: 'webcam', component: AngularWebcamComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
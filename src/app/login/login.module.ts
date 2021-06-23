import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageForgotComponent } from './pages/page-forgot/page-forgot.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';


@NgModule({
  declarations: [
    PageForgotComponent,
    PageResetComponent,
    PageSignInComponent,
    PageSignUpComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

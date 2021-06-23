import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    IconsModule,
    UiModule
  ]
})
export class CoreModule { }

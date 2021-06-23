import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconNavComponent, 
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }

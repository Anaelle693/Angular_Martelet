import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [
    BtnComponent,
    TableDarkComponent,
    TableLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    BtnComponent,
    TableDarkComponent,
    TableLightComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material.module';


@NgModule({
  declarations: [],
  imports: [],
  exports:[
   CommonModule,
   MaterialModule,
   ReactiveFormsModule ,
   HttpClientModule,
   FlexLayoutModule,
   ReactiveFormsModule,
   BrowserAnimationsModule
  ]
})
export class SharedModule { }

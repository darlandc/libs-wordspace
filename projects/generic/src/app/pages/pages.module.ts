
import { LibrariesModule } from './../libraries.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LibrariesModule,
  ]
})
export class PagesModule { }

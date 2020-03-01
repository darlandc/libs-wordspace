import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiWpComponent } from './api-wp.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ApiWpComponent],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  exports: [ApiWpComponent]
})
export class ApiWpModule { }

import { ApiWpModule } from 'api-wp';
import { NgModule } from '@angular/core';
import { AuthModule } from 'auth';
import { ReducersModule } from 'reducers';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ReducersModule,
    AuthModule,
    ApiWpModule
  ]
})
export class LibrariesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ApiWpModule } from 'api-wp';
import { AuthModule } from 'auth';
import { ReducersModule } from 'reducers';

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

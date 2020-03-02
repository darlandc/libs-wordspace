import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApiNodeService } from './api-node.service';
import { NgModule } from '@angular/core';
import { ApiNodeComponent } from './api-node.component';

@NgModule({
  declarations: [ApiNodeComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [ApiNodeComponent],
  providers: [ApiNodeService]
})
export class ApiNodeModule { }
